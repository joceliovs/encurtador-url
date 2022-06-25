import { URLmodel } from "database/model/url";
import { request, response } from "express";
import shortId from 'shortid'
import { config } from "./config/constants";

export class URLController {
    public async shorten(): Promise <void> {
        const url = await URLmodel.findOne({originURL})
        if(url){
            response.json(url)
        }
        const {originURL} = request.body;
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        URLmodel.create({hash, shortURL, originURL})
        response.json({originURL,hash, shortURL })
    }

    public async redirect(): Promise<void>{
      
        const {hash} = request.params
        const url = await URLmodel.findOne({hash})
        if(url){
        response.redirect(url.originURL)
        }
        response.status(400).json({error: 'url not found'
        })
    }
}