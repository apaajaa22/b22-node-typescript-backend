import { Response } from 'express'

const response = (res:Response,message:string,data?:object | any[] | null,status?:number) =>{
    let success = true
    if(!status){
        status = 200
    }
    if(status >= 400){
        success = false
    }
    return res.status(status).json({
        success,
        message,
        data
    })
}
export default response