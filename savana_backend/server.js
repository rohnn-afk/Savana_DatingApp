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
import { NotificationModel } from './Models/NotificationModel.js'


// {dot env}
dotenv.config()
const port = process.env.PORT 




// {express}
const app = express()
const server =  http.createServer(app)
export const io = new Server(server,{
  cors: {
    origin: ["https://savana-datingapp-frontend.onrender.com", "http://localhost:5173"],
    methods:  ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
  }
}
)

const allowedOrigins = [
  "https://savana-datingapp-frontend.onrender.com",
  "http://localhost:5173", // Add your dev environment
];


// app.use(cors())

app.use(cors({
  origin: allowedOrigins,
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

app.use(express.json())  
app.use(cookieParser())



// app.use(cors({ 
//   origin: "*", // Allows requests from any origin
//   methods: "GET,POST,PUT,DELETE,PATCH",
//   credentials: true, // Allows cookies and authentication headers
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

// app.use(cors({
//   origin: "https://savana-datingapp-frontend.onrender.com", // Allow only your frontend
//   methods: "GET,POST,PUT,DELETE",
//   credentials: true, // Allow cookies if needed
// }));

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

io.on('connection',async (socket)=>{
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


