import { Auth0Provider } from "@bcwdev/auth0provider"
import { matersService } from "../services/MatersService.js"
import BaseController from "../utils/BaseController.js"


export class MatersController extends BaseController {
  constructor () {
    super('api/maters')
    this.router
    .get('', this.getAllMaters)
    .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getAllMaters(req, res, next){
    try {
        const maters = await matersService.getAllMaters()
        return res.send(maters)
    } catch (error) {
        next(error)  
    }
  }
  async createMater(req, res, next) {
    try {
      const user = req.userInfo
      req.body.creatorId = user.id
      const newMater = await matersService.createMater(req.body)
      return res.send(newMater)
    } catch (error) {
      next(error)
}
}

//       // Routes go here
//       .get('', this.getAllBirds)
//       .get('/:birdId', this.getBirdById)
//       .get('/:birdId/watchers', this.getWatchersByBirdId)
//       .use(Auth0Provider.getAuthorizedUserInfo)
//       .post('', this.createBird)
//   }
//   async getWatchersByBirdId(req, res, next) {
//     try {
//       const watchers = await watchersService.getWatchersByBirdId(req.params.birdId)
//       return res.send(watchers)
//     } catch (error) {
//       next(error)
//     }
//   }


//   async getAllBirds(req, res, next) {
//     try {
//       const birds = await birdsService.getAllBirds()
//       return res.send(birds)
//     } catch (error) {
//       next(error)
//     }
//   }

//   async getBirdById(req, res, next) {
//     try {
//       const birdId = req.params.birdId
//       const bird = await birdsService.getBirdById(birdId)
//       return res.send(bird)
//     } catch (error) {
//       next(error)
//     }
//   }

//   async createBird(req, res, next) {
//     try {
//       const user = req.userInfo
//       req.body.creatorId = user.id
//       const newBird = await birdsService.createBird(req.body)
//       return res.send(newBird)
//     } catch (error) {
//       next(error)
//     }
//   }
}