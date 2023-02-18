import { appState } from "../AppState.js";

class ForeignProfilesService{
    async activeMater(materId) {
        console.log('MY NAME IS TOW MATER', materId);
        let mater = appState.maters.find(m => m.id == materId)
        console.log(mater);
        appState.activeMater = mater
}
}

export const foreignProfilesService = new ForeignProfilesService