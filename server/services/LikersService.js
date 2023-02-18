import { dbContext } from "../db/DbContext.js"

class LikersService {
  async getLikersByBirdId(materId) {
    const likers = await dbContext.Likers.find({ materId }).
      populate('mater', 'name imgUrl')
    return likers
  }
  async becomeLiker(likerData) {
    const liker = await dbContext.Likers.create(likerData)
    await liker.populate('Creator')
    return liker
  }

}

export const likersService = new LikersService()