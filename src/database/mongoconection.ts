import { config } from "controller/config/constants";
import mongoose from "mongoose";

export class mongoconect{
    public async connect():Promise<void>  {
        try{
            mongoose.connect(config.mongoconect, {useNewUrlParser:true, useUniFiedTopology: true })
            console.log('database connected')
        }    catch(err){
                console.error('err.message')
                process.exit(1)
            
        }
    }
}