import { appState } from "../AppState.js"
import { Mater } from "../Models/Mater.js";
import { server } from "./AxiosService.js"

class MatersService{
  async getMaters() {
    const maters = await server.get('/api/maters')
    console.log(maters.data);
    appState.maters = maters.data.map(m => new Mater(m))
    console.log(appState.maters);
  }


}

export const matersService = new MatersService()