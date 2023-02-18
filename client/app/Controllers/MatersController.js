import { appState } from "../AppState.js";
import { accountService } from "../Services/AccountService.js";
import { matersService } from "../Services/MatersService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


function _drawMaters(){
  let template = " "
  appState.maters.forEach(m => template += m.ProfileTemplate)
  setHTML('foreign-profiles', template)
}

function _drawMater(){
  console.log(appState.mater);
  let template = appState.mater.CheckAccountHasProfle
  setHTML('profile', template)
}

export class MatersController{

  constructor(){
    this.getMaters()
    // this.setMater()
    appState.on('maters', _drawMaters)
    appState.on('mater', _drawMater)
  }

  async getMaters(){
    try {
      const maters = await matersService.getMaters()
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

  async updateMater(materId){
    try {
    window.event.preventDefault()
    const form = window.event.target
    const formData = getFormData(form)
    await matersService.updateMater(materId, formData)
    } catch (error) {
      console.error(error);
    }
    
  }

  async setMater(){
    try {
      await matersService.setMater()
    } catch (error) {
      console.error(error)
    }
  }

}