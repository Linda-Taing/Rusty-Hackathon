import { appState } from "../AppState.js"
import { Mater } from "../Models/Mater.js";
import { server } from "./AxiosService.js"

class MatersService{


  async setMater(){
  console.log(appState.account, "account");
  appState.mater = 
  }
  async updateMater(materId, formData) {
    const materIndex = appState.maters.findIndex(m => m.id == materId)
    const updatedMater = server.put(`/api/maters/${materId}`, formData)
    const newMater = new Mater(updatedMater)
    appState.maters.splice(materIndex, 1, newMater)
    appState.emit('maters')
  }
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