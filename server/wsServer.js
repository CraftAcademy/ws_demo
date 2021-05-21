const WebSocket = require('ws')


const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws, req) => {
  ws.send(JSON.stringify({user: 'Server', body: 'You are connected'}))
  ws.on('open', () => console.log('A clientconnection was established!'))
  ws.on('message', message => {
    console.log(message)
    wss.clients.forEach(client => {
      client.send(message)
    })
  })
})

