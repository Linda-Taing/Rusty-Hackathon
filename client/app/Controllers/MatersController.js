import { appState } from "../AppState.js";
import { matersService } from "../Services/MatersService.js";
import { getFormData } from "../Utils/FormHandler.js";




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

  async getMatersById(materId){
    try {
      await matersService.getMatersById(materId)
    } catch (error) {
      console.error(error);
    }
  }

  async createMater(){
    try {
      window.event.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      await matersService.createMater(formData)
    } catch (error) {
      console.error(error);
    }
  }

}