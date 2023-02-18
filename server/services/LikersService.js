import { dbContext } from "../db/DbContext.js"

class LikersService {
  async getLikerssByBirdId(materId) {
    const likers = await dbContext.Likers.find({ matersId }).
    populate('mater', 'name imgUrl')
    return likers
  }
  async becomeLiker(likerData) {
    const liker = await dbContext.Likers.create(likerData)
    return liker
  }

}

export const likersService = new LikersService()