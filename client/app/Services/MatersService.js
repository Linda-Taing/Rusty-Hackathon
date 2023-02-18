import { appState } from "../AppState.js"
import { Mater } from "../Models/Mater.js";
import { server } from "./AxiosService.js"

class MatersService{


  async setMater(){
  const accountId = appState.account.id
  console.log(accountId);
  // @ts-ignore
  appState.mater = appState.maters.find(m => m.creatorId == accountId)
  }
  
  async updateMater(formData, materId) {
    const res = await server.put(`/api/maters/${materId}`, formData)
    console.log('UPDATING A MATER', res.data);
    const materIndex = appState.maters.findIndex(m => m.id == materId)
    // const newMater = new Mater(updatedMater)
    appState.maters.splice(materIndex, 1, new Mater(res.data))
    appState.emit('maters')
  }

  async createMater(formData) {
    const mater = await server.post('/api/maters')
    console.log("creating mater data from server", mater.data);
    if(!mater){throw new Error("No Mater to add!")}
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