import { appState } from "../AppState.js";
import { Mater } from "../Models/Mater.js";
// @ts-ignore
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

  if(!appState.mater){
    setHTML('profile', Mater.CheckAccountHasProfle())}

    else{let template = appState.mater.MaterProfile
    setHTML('profile', template)}
}

export class MatersController{

  constructor(){
    this.getMaters()
    // this.setMater()
    appState.on('maters', _drawMaters)
    appState.on('mater', _drawMater)
    appState.on('mater', this.createUpdateForm)
  }

  async getMaters(){
    try {
      // @ts-ignore
      const maters = await matersService.getMaters()
    } catch (error) {
      console.error(error);
    }
  }



  async createMater(){
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      const formData = getFormData(form)
      await matersService.createMater(formData)
    } catch (error) {
      console.error(error);
    }
  }

  
  async updateMater(materId){
    try {
      // @ts-ignore
      window.event?.preventDefault()
      // console.log("mater updated");
      // @ts-ignore
      const form = window.event?.target
      const formData = getFormData(form)
      await matersService.updateMater(formData, materId)
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

  createUpdateForm(){
    try {
      console.log("update form drawn");
      if(!appState.mater){throw new Error('no valid profile!')}
      let form = appState.mater.MakeEditForm
      setHTML('updateForm', form)
    } catch (error) {
      console.error(error);
    }
  }

}