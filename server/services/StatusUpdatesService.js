import { dbContext } from "../db/DbContext.js"

class StatusUpdatesService {

    async getStatusUpdate(materId) {
        const update = await dbContext.Maters.find({ materId })
            .populate('Mater', 'name imgUrl')
        return update
    }

    async makeStatusUpdate(updaterData) {
        const updater = await dbContext.StatusUpdate.create(updaterData)
        return updater
    }
}





export const statusUpdatesService = new StatusUpdatesService()
