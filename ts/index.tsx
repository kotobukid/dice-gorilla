import * as React from 'react'
import {render} from 'react-dom'
import {NavBar} from "./components/NavBar"
import {RoomsList} from "./components/RoomsList"
import "../less/index.less"

window.onload = () => {
  const $root = document.querySelector('#root')


  const MainApp = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    const rooms = [
      'room#1',
      'room#2',
      'room#3',
      'room#4',
      'room#5',
      'room#6'
    ]

    return (
      <div>
        <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        {
          isAuthenticated ?
            <RoomsList rooms={rooms}/>
            :
            <div onClick={() => setIsAuthenticated(true)}>
              <span className="button">ログイン</span>していません
            </div>
        }
      </div>
    )
  }

  render(<MainApp/>, $root)
}