import * as React from 'react'
import {render} from 'react-dom'
import {NavBar} from "./components/NavBar"
import {RoomsList} from "./components/RoomsList"
import io, {Socket} from "socket.io-client"
import "../less/index.less"

window.onload = () => {
  const $root = document.querySelector('#root')

  const socket: Socket = io(`${document.location.origin}?room=1`)

  const MainApp = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    const [rooms, setRooms] = React.useState([] as {id: number, name: string}[])


    socket.on('rooms list', (rooms: {id: number, name: string}[]) => {
      setRooms(rooms)
    })

    socket.on('you logged in', () => {
      // check account
      setIsAuthenticated(true)
    })

    socket.on('you logged out', () => {
      setIsAuthenticated(false)
    })

    const doLogin = (login: boolean) => {
      if (login) {
        socket.emit('login')
      } else {
        socket.emit('logout')
      }
    }

    return (
      <div>
        <NavBar isAuthenticated={isAuthenticated} doLogin={doLogin}/>
        {
          isAuthenticated ?
            <RoomsList rooms={rooms}/>
            :
            <div onClick={() => doLogin(true)}>
              <span className="button">ログイン</span>していません
            </div>
        }
      </div>
    )
  }

  render(<MainApp/>, $root)
}