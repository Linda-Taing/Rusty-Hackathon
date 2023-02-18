import { Mater } from "./Mater"

export class HeaderButton{


    get headerButton(){
        return /*html*/` 
        
        `
    }

    get createProfile(){
        return /*html*/`
                <button type="button" class="user-profile-button-edit" data-bs-toggle="modal" data-bs-target="#createModal">
            Create Profile
                </button>
        `
    } 

    get yourProfile(){
        return /*html*/`
        <button class="user-profile-button bg-gradient" type="button" data-bs-toggle="offcanvas" data-bs-target="#user-profile" aria-controls="offcanvasExample">
        Your Profile
        </button>
        `
    }
    
}