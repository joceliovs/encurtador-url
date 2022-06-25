import {prop, typegooses} from '@hasezoey/typegooses'


export class Url extends typegooses{
    @prop ({ required:true})
    hash: string;
    @prop({required:true})
    origin: string;
    @prop ({ required:true})
    shorturl: string
}
export const URLmodel = new URL().getModelForClass (url)