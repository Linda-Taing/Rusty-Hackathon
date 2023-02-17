import { dbContext } from "../db/DbContext.js"

class StatusUpdatesService {
    async makeStatusUpdate(updaterData) {
        const updater = await dbContext.StatusUpdate.create(updaterData)

        return updater
    }
}





export const statusUpdatesService = new StatusUpdatesService()
