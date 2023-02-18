import { Auth0Provider } from "@bcwdev/auth0provider";
import { likersService } from "../services/LikersService.js";
import BaseController from "../utils/BaseController.js";


export class LikersController extends BaseController{
  constructor(){
    super('api/likers')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.becomeLiker)
  }


  async becomeLiker (req, res, next) {
  try {
    req.body.materId = req.param.materId
    const liker = await likersService.becomeLiker(req.body)
    return res.send(liker)
  } catch (error) {
    next(error)
    }
  }
}