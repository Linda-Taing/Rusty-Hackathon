import { query } from "express"
import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class MatersService {
    async getAllMaters(){
        const maters = await dbContext.Maters.find()
        return maters
    }
      async creatMater(materData) {
    const newMater = await dbContext.Maters.create(materData)
    return newMater
  }


//   async getBirdById(birdId) {
//     const bird = await dbContext.Birds.findById(birdId)
//       .populate('Creator', 'name picture')
//       .populate('watchCount')
//     if (!bird) {
//       throw new BadRequest("Bird not found!")
//     }
//     return bird
//   }

//   async createBird(birdData) {
//     const newBird = await dbContext.Birds.create(birdData)
//     await newBird.populate('Creator watchCount', 'name picture')
//     return newBird
//   }

//   async getAllBirds() {
//     const birds = await dbContext.Birds.find()
//       .populate('Creator', 'name picture')
//       .populate('watchCount')
//     return birds
//   }




}

export const matersService = new MatersService()