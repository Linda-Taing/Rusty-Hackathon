import { query } from "express"
import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class MatersService {
    async getAllMaters(){
        const maters = await dbContext.Maters.find()
        .populate('StatusUpdate')
        return maters
    }

      async createMater(materData) {
    const newMater = await dbContext.Maters.create(materData)
    await newMater.populate('Creator','name')
    return newMater
    }






}

export const matersService = new MatersService()