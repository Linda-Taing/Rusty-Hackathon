import { Auth0Provider } from "@bcwdev/auth0provider"
import { matersService } from "../services/MatersService.js"
import BaseController from "../utils/BaseController.js"


export class MatersController extends BaseController {
  constructor () {
    super('api/maters')
    this.router
    .get('', this.getAllMaters)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('',this.createMater)
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


}