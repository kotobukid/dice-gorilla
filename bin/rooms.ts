import * as sqlite3 from "sqlite3"
import * as path from 'path'

const db: sqlite3.Database = new sqlite3.Database(path.resolve(__dirname, '../db.sqlite3'));
import {Room, MaybeError} from "../types";

const fetch_all_rooms = (complete: Function) => {
  db.all('select id, name, grid_type, locked, description, owner_id from djadmin_room;', (err: MaybeError, rooms: Room[]) => {
    if (err) {
      console.error('sql error : fetch rooms')
      throw err
    }
    complete(err, rooms)
  })
}


export {
  fetch_all_rooms
}
