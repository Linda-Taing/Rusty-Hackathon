export class ForeignProfiles{



    get activeMater(){
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
            <h1 class="mdi mdi-heart-outline"></h1>
        </div>
        </div>
    </div>
        `
    }
}