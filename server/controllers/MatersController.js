import { Auth0Provider } from "@bcwdev/auth0provider"
import { matersService } from "../services/MatersService.js"
import BaseController from "../utils/BaseController.js"


export class MatersController extends BaseController {
  constructor() {
    super('api/maters')
    this.router
      .get('', this.getAllMaters)
      .get('/:materId', this.getMaterById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createMater)
      .put('/:materId', this.updateMater)

  }

  async getMaterById(req, res, next) {
    try {
      const maters = await matersService.getMaterById(req.params.materId)
      return res.send(maters)
    } catch (error) {
      next(error)
    }
  }

  async getAllMaters(req, res, next) {
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

  async updateMater(req, res, next) {
    try {
      const user = req.userInfo
      req.body.materId = user.id
      const materId = req.params.materId
      const body = req.body
      const newMater = await matersService.updateMater(materId, body)
      return res.send(newMater)
    } catch (error) {
      next(error)
    }
  }
}
