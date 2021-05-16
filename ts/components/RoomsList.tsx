import * as React from 'react'
import {Room} from "../../types"

declare type RoomsListProps = {
  rooms: Room[],
  createRoom(e: React.MouseEvent): void
}

const RoomsList: React.FC<RoomsListProps> = (props) => {
  const style: React.CSSProperties = {
    padding: '10px'
  }

  const ulStyle: React.CSSProperties = {
    width: '200px',
    border: '1px solid grey',
    padding: '10px'
  }

  return (
    <div className="roomsList" style={style}>
      <h1>部屋一覧</h1>
      <button onClick={props.createRoom}>部屋作成</button>
      <ul style={ulStyle}>
        {
          props.rooms.map(room =>
            <li className="link" key={room.id} title={room.description}>#{room.id} {room.name}</li>
          )
        }
      </ul>
    </div>
  )
}

export {RoomsList}