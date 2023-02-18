import { Auth0Provider } from "@bcwdev/auth0provider";
import { statusUpdatesService } from "../services/StatusUpdatesService.js";
import BaseController from "../utils/BaseController.js";

export class StatusUpdatesController extends BaseController {

    constructor() {
        super('api/statusUpdates')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('/:materId', this.makeStatusUpdate)

    }

    async makeStatusUpdate(req, res, next) {
        try {
            req.body.materId = req.params.materId
            const updater = await statusUpdatesService.makeStatusUpdate(req.body)
            return res.send(updater)
        } catch (error) {
            next(error)
        }
    }

    

}

