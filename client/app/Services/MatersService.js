import { appState } from "../AppState.js"
import { Mater } from "../Models/Mater.js";
import { server } from "./AxiosService.js"

class MatersService{
  getMatersById(materId) {
    const mater = appState.maters.find(m => m.id == materId)
    appState.mater = mater
    console.log(appState.mater);
  }
  async createMater(formData) {
    const mater = await server.post('/api/maters')
    console.log("creating mater data from server", mater.data);
    if(!mater){throw new Error("No mater to add!")}
    const newMater = new Mater(mater.data)
    console.log("Newly created Mater", newMater);
    appState.maters.push(newMater)
  }
  async getMaters() {
    const maters = await server.get('/api/maters')
    appState.maters = maters.data.map(m => new Mater(m))
    console.log(appState.maters);
  }


}

export const matersService = new MatersService()