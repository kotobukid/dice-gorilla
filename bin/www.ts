#!/usr/bin/env node
import {ErrnoException} from './types'
import {Socket as _Socket} from "net";
import {fetch_all_rooms} from "./rooms";
import {MaybeError, Room} from "../types";

/**
 * Module dependencies.
 */

const app = require('../app');
const debug = require('debug')('ex1:server');
const http = require('http');
const {Server} = require("socket.io");

/**
 * Get port from environment and store in Express.
 */

const port: number = Number(normalizePort(process.env.PORT || '3000'));
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

const io = new Server(server);

declare type Socket = _Socket & {
  id: string,
  handshake: {
    query: {
      room: string
    }
  }
}

io.on('connection', (socket: Socket & { id: string }) => {
  console.log(socket.handshake.query.room)

  socket.on('login', () => {
    io.to(socket.id).emit('you logged in')
  })

  socket.on('logout', () => {
    io.to(socket.id).emit('you logged out')
  })

  fetch_all_rooms((err: MaybeError, rooms: Room[]) => {
    socket.emit('rooms list', rooms)
  })
})

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: ErrnoException) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr: string | { port: string } = server.address();
  const bind: string = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log(`start listening on port ${port}`);
}
