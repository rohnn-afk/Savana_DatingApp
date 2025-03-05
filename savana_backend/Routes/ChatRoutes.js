import express from 'express'
import { fetchMatches, getMessages, sendMessages } from '../Controllers/Matches.js'
import { UserAuth } from '../Middleware/AuthUser.js'

const ChatRoute = express.Router()

ChatRoute.post('/',(req,res)=>{
    res.json('working')
})

ChatRoute.post('/allmatches',UserAuth,fetchMatches)
ChatRoute.post('/:id',UserAuth,getMessages)
ChatRoute.post('/send/:id',UserAuth,sendMessages)




export default ChatRoute