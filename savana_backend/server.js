import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoDB from './Config/mongodb.js'
import UserRouter from './Routes/UserRoutes.js'
import connectCloudinary from './Config/Cloudinary.js'
import formData from 'express-form-data'
import cookieParser from 'cookie-parser'
import MatchingRoutes from './Routes/MatchingRoutes.js'
import ChatRoute from './Routes/ChatRoutes.js'
import http from 'http'
import { Server } from 'socket.io'


// {dot env}
dotenv.config()
const port = process.env.PORT 



// {express}
const app = express()
const server = new http.createServer(app)
export const io = new Server(server,{
  cors:{origin:'*'}}
)




app.use(express.json())  
app.use(cookieParser())
app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin) return callback(null, "*")
        callback(null, origin)
      },
      credentials: true, 
    })
  );
app.use(formData.parse()); 
app.use(express.urlencoded({ extended: true }));



// {server check}
app.get('/',(req,res)=>{
    res.json('server is working')
})




// {server routess}
app.use('/api/user',UserRouter)
app.use('/api/match',MatchingRoutes)
app.use('/api/messages',ChatRoute)

export const getUserSocketID = (userID) =>{

  return onlineUsers[userID]
}

const onlineUsers = {}

io.on('connection',(socket)=>{
  console.log('user is connected',socket.id)

  const userID = socket.handshake.query.userID

  if(userID){
    onlineUsers[userID] = socket.id
  }

  io.emit('onlineUsers',Object.keys(onlineUsers))

  socket.on('disconnect',()=>{
  
    delete onlineUsers[userID]
    io.emit('onlineUsers',Object.keys(onlineUsers))
  
    console.log('user disconnected',socket.id)
  })
})




// {server listen}
server.listen(port,()=>{
console.log(`server is listening at ${port}`)
mongoDB()
connectCloudinary()
})


