import { appState } from "../AppState.js";
import { ForeignProfiles } from "../Models/ForeignProfiles.js";
import { foreignProfilesService } from "../Services/ForeignProfilesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawActiveMater(){
    setHTML("activeMater", appState.foreignProfiles.activeMater)
}

export class ForeignProfilesController{
    constructor(){
        appState.on('activeMater', _drawActiveMater)
    }
    
    async activeMater(materId){
        console.log('active mater', materId);
        try {
            await foreignProfilesService.activeMater(materId)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}