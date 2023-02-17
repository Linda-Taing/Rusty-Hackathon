import { appState } from "../AppState.js";
import { matersService } from "../Services/MatersService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


function _drawMaters(){
  let template = " "
  appState.maters.forEach(m => template += m.ProfileTemplate)
  setHTML('foreign-profiles', template)
}

export class MatersController{

  constructor(){
    this.getMaters()
    appState.on('maters', _drawMaters)
  }

  async getMaters(){
    try {
      const maters = await matersService.getMaters()
    } catch (error) {
      console.error(error);
    }
  }

  getMatersById(materId){
    try {
      debugger
      matersService.getMatersById(materId)
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