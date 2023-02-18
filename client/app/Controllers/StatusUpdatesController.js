import { statusUpdatesService } from "../Services/StatusUpdatesService.js";
import { Pop } from "../Utils/Pop.js";


export class StatusUpdatesController {
    constructor() {

        console.log('Updates Controller')
    }

    async statusUpdate(materId) {
        try {
            await statusUpdatesService.statusUpdate(materId);
        } catch (error) {
            console.error(error);
            // @ts-ignore
            Pop.error('ERROR IN STATUS UPDATE', error.message)
        }
    }
}