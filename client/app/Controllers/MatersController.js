import { appState } from "../AppState.js";
import { matersService } from "../Services/MatersService.js";




export class MatersController{

  constructor(){
    this.getMaters()
  }

  async getMaters(){
    try {
      const maters = await matersService.getMaters()
    } catch (error) {
      console.error(error);
    }
  }

  async getMatersById(){
    
  }

}