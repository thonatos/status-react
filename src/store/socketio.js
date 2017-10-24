import { observable } from 'mobx'
import SIO from 'socket.io-client'
import { notification } from 'antd'

class State {
  @observable _events = []

  constructor(root) {
    this.root = root

    const socket = SIO('https://console.arashivision.com', {
      transports: ['websocket'],
    })

    window.socket = socket

    socket.on('connect', () => {
      console.log('#connect:', socket)
      socket.emit('server', 'client setup.')
    })

    socket.on('client', ({ data }) => {
      const { action, payload } = data
      console.log('#client:', action, payload)

      switch (action) {
        case 'notice':
          const { type, message, detail } = payload
          notification[type || 'info']({
            message,
            description: detail,
          })
          break

        default:
          break
      }
    })

    socket.on('disconnect', () => {
      console.log('#disconnect')
    })
  }
}

export default State
