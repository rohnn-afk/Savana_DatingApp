import express from 'express'
import {  fetchMatchInfo, fetchPotentialMatches, getpotentialmatchimages, likeUser, unmatch } from '../Controllers/Matches.js'
import { UserAuth } from '../Middleware/AuthUser.js'
import { fetchNotification, markReadNotification } from '../Controllers/Notifications.js'

const MatchingRoutes = express.Router()

MatchingRoutes.post('/like',UserAuth,likeUser)
MatchingRoutes.post('/potentialmatches',UserAuth,fetchPotentialMatches)
MatchingRoutes.post('/matchinfo/:id',UserAuth,fetchMatchInfo)
MatchingRoutes.post('/unmatch',UserAuth,unmatch)
MatchingRoutes.post('/getpotentialmatchimages',UserAuth,getpotentialmatchimages)

MatchingRoutes.post('/notification',UserAuth,fetchNotification)
MatchingRoutes.post('/readnotification',UserAuth,markReadNotification)




export default MatchingRoutes