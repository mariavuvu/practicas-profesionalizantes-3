import { CRUDModel } from "../crud/crudModel.js";
import { CRUDView } from "../crud/crudView.js";
import { CRUDViewController } from "../crud/crudController.js";

class Crud 
{
    constructor()
    {
        this.innerView = new CRUDView(); 
        this.innerModel = new CRUDModel(); 
        this.innerController = new CRUDViewController(this.innerView, this.innerModel); 
    }
}

function main()
{

  let crudInstance = new Crud();
  document.body.appendChild(crudInstance.innerView);
}

window.onload = main;