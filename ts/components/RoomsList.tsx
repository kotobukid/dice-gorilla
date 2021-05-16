import * as React from 'react'
import {Room} from "../../types";

declare type RoomsListProps = {
  rooms: Room[]
}

const RoomsList: React.FC<RoomsListProps> = (props) => {
  const style: React.CSSProperties = {
    padding: '10px'
  }

  return (
    <div className="roomsList" style={style}>
      <h1>部屋一覧</h1>
      <ul>
        {
          props.rooms.map(room =>
            <li key={room.id}>{room.name}</li>
          )
        }
      </ul>
    </div>
  )
}

export {RoomsList}