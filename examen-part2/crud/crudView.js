class CRUDView extends HTMLElement
{
  constructor()
  {
    super();
    
    this.viewTitle = document.createElement('h1');
    this.viewTitle.innerText = 'Libreta de contactos';

    this.createButton = document.createElement('button');
    this.createButton.innerText = 'Agregar Contacto';

    this.inputName = document.createElement('input');
    this.inputName.type = 'text';
    this.inputName.placeholder = 'Nombre';

    this.inputSurname = document.createElement('input');
    this.inputSurname.type = 'text';
    this.inputSurname.placeholder = 'Apellido';

    this.inputPhone = document.createElement('input');
    this.inputPhone.type = 'text';
    this.inputPhone.placeholder = 'Telefono';

    this.inputNewName = document.createElement('input');
    this.inputNewName.type = 'text';
    this.inputNewName.placeholder = 'Nombre Nuevo';

    this.inputNewSurname = document.createElement('input');
    this.inputNewSurname.type = 'text';
    this.inputNewSurname.placeholder = 'Apellido Nuevo';

    this.inputNewPhone = document.createElement('input');
    this.inputNewPhone.type = 'text';
    this.inputNewPhone.placeholder = 'telefono Nuevo';

    this.inputFindSurname = document.createElement('input');
    this.inputFindSurname.type = 'text';
    this.inputFindSurname.placeholder = 'Buscar por apellido';

    this.inputDeleteContact = document.createElement('input');
    this.inputDeleteContact.type = 'text';
    this.inputDeleteContact.placeholder = 'Buscar por apellido';

    this.optionsInput = document.createElement('select');

    this.optionFriends = document.createElement("option");
    this.optionFriends.innerText = "Amigos"; 

    this.optionFamily = document.createElement("option");
    this.optionFamily.innerText = "Familia"; 

    this.optionWork = document.createElement("option");
    this.optionWork.innerText = "Trabajo";

    this.optionStudie = document.createElement("option");
    this.optionStudie.innerText = "Estudio";

    this.optionFavorite = document.createElement("option");
    this.optionFavorite.innerText = "Favoritos";

    this.optionService = document.createElement("option");
    this.optionService.innerText = "Servicios";
  
    this.optionsInput.add(this.optionFriends, null);
    this.optionsInput.add(this.optionFamily, null);
    this.optionsInput.add(this.optionWork, null);
    this.optionsInput.add(this.optionStudie, null);
    this.optionsInput.add(this.optionFavorite, null);
    this.optionsInput.add(this.optionService, null);


    this.updateButton = document.createElement('button');
    this.updateButton.innerText = 'Actualizar';

    this.deleteButton = document.createElement('button');
    this.deleteButton.innerText = 'Borrar';

    this.dataTitle = document.createElement('h4');
    this.dataTitle.innerText = 'Data:';

    this.result = document.createElement('table');
    this.resultHeader = this.result.createTHead();
    this.resultBody = this.result.createTBody();

    let columnTags = ['Categoria ','Nombre','Apellido','Telefono'];

    this.resultHeaderRow = this.resultHeader.insertRow();
    
    for( let tag of columnTags )
    {
      let columnElement = document.createElement('th');
      columnElement.innerText = tag;
      this.resultHeaderRow.insertCell().appendChild( columnElement );
    }

    this.appendChild(this.viewTitle);
    this.appendChild(this.inputName);
    this.appendChild(this.inputSurname);
    this.appendChild(this.inputPhone);
    this.appendChild(this.optionsInput);
    this.appendChild(this.createButton);
    this.appendChild(document.createElement('br'));
    this.appendChild(document.createElement('br'));
    this.appendChild(this.inputFindSurname);
    this.appendChild(this.inputNewName);
    this.appendChild(this.inputNewSurname);
    this.appendChild(this.inputNewPhone);
    this.appendChild(this.updateButton);;
    this.appendChild(document.createElement('br'));
    this.appendChild(document.createElement('br'));
    this.appendChild(this.inputDeleteContact);
    this.appendChild(this.deleteButton);
    this.appendChild(document.createElement('br'));
    this.appendChild(document.createElement('br'));
    this.appendChild(this.dataTitle);
    this.appendChild(this.result);

  }
  
  connectedCallback()
  {}
  
  disconnectedCallback()
  {}

  render(dataContainers) {
    this.resultBody.innerHTML = "";
 
    for (let i = 0; i < dataContainers.length; i++) {
      const contact = dataContainers[i];

      const row = document.createElement('tr');
      const categoryCell = document.createElement('td');
      const nameCell = document.createElement('td');
      const lastNameCell = document.createElement('td');
      const phoneCell = document.createElement('td');

      categoryCell.innerText = contact.optionsInput;
      nameCell.innerText = contact.inputName;
      lastNameCell.innerText = contact.inputSurname;
      phoneCell.innerText = contact.inputPhone;

      row.appendChild(categoryCell);
      row.appendChild(nameCell);
      row.appendChild(lastNameCell);
      row.appendChild(phoneCell);

      this.resultBody.appendChild(row);
    }
  }
}

customElements.define("crud-view", CRUDView);
export {CRUDView}; 