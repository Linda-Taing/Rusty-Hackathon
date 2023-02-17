
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


}