
export class Mater{
  
  constructor(data){
    this.name = data.name
    this.voltage = data.voltage
    this.type = data.type
    this.language = data.language
    this.id = data.id
    this.img = this.GenerateImage
    this.creatorId = data.creatorId
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
            <h4>${this.language}L</h4>
            <h4>${this.voltage}</h4>
            <h4 class="bio-class">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt aliquid doloremque maiores, velit numquam.</h4>
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


}