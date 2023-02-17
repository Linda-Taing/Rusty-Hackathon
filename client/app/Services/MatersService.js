import { appState } from "../AppState.js"
import { Mater } from "../Models/Mater.js";
import { server } from "./AxiosService.js"

class MatersService{
  async getMatersById(materId) {
    const mater = await server.get('/api/maters')
    appState.mater
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
  }


}

export const matersService = new MatersService()