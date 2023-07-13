
class CRUDViewController
{
  constructor(view, model)
  {
    
    this.innerView = view;
    this.innerModel = model;

    this.innerView.createButton.onclick = () => this.createContact();
    this.innerView.updateButton.onclick = () => this.updateButton();
    this.innerView.deleteButton.onclick = () => this.deleteButton();
  }

  createContact()
  {
    let optionsInput = this.innerView.optionsInput.value;
    let inputName = this.innerView.inputName.value;
    let inputSurname = this.innerView.inputSurname.value;
    let inputPhone = this.innerView.inputPhone.value;

    this.innerModel.create(optionsInput, inputName, inputSurname, inputPhone)
    this.innerView.render(this.innerModel.readAll()); 
    
  }
  updateButton()
  {
    let inputFindSurname = this.innerView.inputFindSurname.value;
    let inputNewName = this.innerView.inputNewName.value;
    let inputNewSurname = this.innerView.inputNewSurname.value;
    let inputNewPhone = this.innerView.inputNewPhone.value;
    this.innerModel.edit(inputFindSurname, inputNewName, inputNewSurname, inputNewPhone); 
    //this.innerView.render(this.innerModel.edit(inputFindSurname, dataInput4, dataInput5, dataInput6));

  }

  deleteButton()
  {

    this.innerModel.delete(this.innerView.inputDeleteContact.value);
    this.innerView.render(this.innerModel.dataContainer);
  }
}

export{CRUDViewController}; 