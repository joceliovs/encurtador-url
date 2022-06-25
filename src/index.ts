import express from 'express'
import { URLController } from 'controller/urlcontroller'
import { mongoconect } from 'database/mongoconection'

const api = express()
api.use(express.json())

const database = new mongoconect
database.connect()

const urlcontroller = new URLController()
api.post('/shorten',urlcontroller.shorten) 
api.get('/:hash',urlcontroller.redirect )

api.listen(5000, () => console.log('express listen'))