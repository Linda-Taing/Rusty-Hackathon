import { appState } from "../AppState.js"

export class Mater{
  
  constructor(data){
    this.name = data.name
    this.voltage = data.voltage
    this.type = data.type
    this.language = data.language
    this.id = data.id
    this.img = this.GenerateImage
    this.creatorId = data.creatorId
    this.description = data.description || "I'm a little rusty"
  }

  

  get GenerateImage(){
    const image = `https://robohash.org/${this.id}`
    return image
  }

  get ProfileTemplate(){
    return`
    <div class="d-flex align-content-center col-4 foreign-prof bg-gradient">
        <div class="row">
          <div class="col-12">
            <img src="${this.img}" alt="" class="foreign-prof-img">
          </div>
          <div class="col-12">
            <h4>${this.name}</h4>
            <h4>${this.language}</h4>
            <h4>Volts: ${this.voltage}v</h4>
            <h4 class="bio-class">${this.description}</h4>
          </div>
          <div class="col-12 d-flex justify-content-between mt-5">
            <!-- NOTE possibly have an "onhover" where the heart becomes a solid icon? (might be a jonah thing) -->
            <h4 class="mdi mdi-heart-outline"></h4>
            <!-- NOTE onclick -> open up that users profile -->
            <button class="view-profile">View Profile</button>
          </div>
        </div>
      </div>
    `
  }

  get MaterProfile(){
    return`
    <h5>${this.name}</h5>
    <div>
        <img class="mb-5 pb-5" src="${this.img}" alt="">
      </div>
      <div>
        ${this.language}
      </div>
        <div class="m-3">
        ${this.description}
      </div>
      <!-- <div class="dropdown mt-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div> -->
      <div class="container">
        <div class="row user-profile-lists">
          <div class="col-6 left-list">
            <h4 class="user-profile-list-title">Your Likes</h4>
            <h6>JoBot</h6>
            <h6>JacoBot</h6>
            <h6>RichBot</h6>
            <h6>LindaBot</h6>
            <h6>BryBot</h6>
          </div>
          <div class="col-6">
            <h4 class="user-profile-list-title">Your Mutuals</h4>
            <h6><span class="mdi mdi-robot-love" onclick=""></span>JoBot</h6>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 pt-5 mt-5 d-flex justify-content-end">
            <button type="button" class="user-profile-button-edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    `
  }

  static CheckAccountHasProfle(){

    
      return`<button>create profile</button>`
    }
  
    
  }


