import * as React from 'react'
import {render} from 'react-dom'
import {NavBar} from "./components/NavBar"
import {RoomsList} from "./components/RoomsList"
import io, {Socket} from "socket.io-client"
import "../less/index.less"
import {Room} from "../types"

window.onload = () => {
  const $root = document.querySelector('#root')

  const socket: Socket = io(`${document.location.origin}?room=0`)
  let socket_room!: Socket;

  const MainApp = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    const [rooms, setRooms] = React.useState([] as Room[])

    socket.on('players in all rooms', (players: Record<string, number>) => {
      console.log(players)
    })

    socket.on('rooms list', (rooms: Room[]) => {
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

    const createRoom = (e: React.MouseEvent): void => {
      const name: string = (window.prompt('Enter room name', '') || '').trim()
      if (name) {
        socket.emit('create room', name)
      }
    }

    const join = (room_id: number) => {
      socket_room = io(`${document.location.origin}?room=${room_id}`)

      socket_room.on('players in room', (msg: string) => {
        console.log(`${msg} players in your room`)
      })
    }

    return (
      <div>
        <NavBar isAuthenticated={isAuthenticated} doLogin={doLogin}/>
        {
          isAuthenticated ?
            <RoomsList rooms={rooms} createRoom={createRoom} join={join}/>
            :
            <div>
              <span className="button link" onClick={() => doLogin(true)}>ログイン</span>していません
            </div>
        }
      </div>
    )
  }

  render(<MainApp/>, $root)
}