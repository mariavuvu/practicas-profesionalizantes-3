class CRUDModel
{
  constructor()
  {
    this.dataContainer = this.readAll();
    console.log(this.dataContainer);
  }

  create( optionsInput, inputName, inputSurname, inputPhone )
  {
    const contact = {
      optionsInput: optionsInput,
      inputName: inputName,
      inputSurname: inputSurname,
      inputPhone: inputPhone
    };

    this.dataContainer.push(contact);
    this.saveDataToStorage(this.dataContainer);
   
    return this.dataContainer; 
  }

  edit(inputFindSurname, inputNewName, inputNewSurname, inputNewPhone)
  {
    const contact = {
      optionsInput: optionsInput,
      inputName: inputNewName,
      inputSurname: inputNewSurname,
      inputPhone: inputNewPhone
    };
    
    for(let i=0; i < this.dataContainer.length; i++)
    {
      if(this.dataContainer[i].inputSurname == inputFindSurname)
      { 
        this.dataContainer.push(contact); 
        this.saveDataToStorage(this.dataContainer); 
        
      }
    }
  }

    delete(inputDeleteContact) 
    {
      for(let i=0; i < this.dataContainer.length; i++)
    {
      if(this.dataContainer[i].inputPhone == inputDeleteContact)
      { 
        this.dataContainer.splice(inputDeleteContact, 1); 
        this.saveDataToStorage(this.dataContainer); 
      }
    }
       
    }


  readAll() {
    const data = localStorage.getItem('contacts');
    return data ? JSON.parse(data) : [];
  }

  saveDataToStorage(dataContainer) {
    
    localStorage.setItem('contacts', JSON.stringify(dataContainer));
  }
}
export {CRUDModel}; 