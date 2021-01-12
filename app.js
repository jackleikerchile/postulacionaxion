const url = 'http://prueba.steincode.com/'


 
  fetch(url)
  .then(res => res.json())
  .then(data => {
    
    inputProperties(data)
    // console.log(inputProperties(data))
    let properties = data.propiedades
    let namesProperty = document.getElementById('property')
    namesProperty.innerHTML = `
    
    <h1>${data.NOMBRE_INMOBILIARIA}<h1>
    <h2>${data.DIRECCION}<h2>
    <h3>${data.PROYECTO}<h3>

    `
    // console.log(data)
    // console.log(properties)
    let result = properties.map(property => {
      return `
      <li class="list-group-item mt-5 active">${property.tipologia}</li>
      <li class="list-group-item ">${property["superficie-total"]}</li>
      <li class="list-group-item ">${property["superficie-util"]}</li>
      <li class="list-group-item ">${property["valor-uf"]}</li>
      
      `
    
    })
    return element.innerHTML = result;


 
    
  
  })
  .catch(err=>console.log(err))
  

  const inputForm = document.getElementById('search');

  const inputProperties = data => {
    inputForm.addEventListener('keyup', e => {
      e.preventDefault()
      const letterClient = inputForm.value.toLowerCase()
      //console.log(letterClient)
      const arrayFilter = data.propiedades.filter(property => {
        const letterApi = property.tipologia.toLowerCase()
        if (letterApi.indexOf(letterClient) !== 1) {
          return property;
        }
      })
    // console.log(arrayFilter)

      
    })
  }


      // function filter() {
    //   var FilterValue, input, ul, li, i;
    
    //   input = documnet.getElementById('search');
    //   FilterValue = input.value.toUpperCase();
    //   ul = document.getElementById('element');
    //   li = ul.getElementsByTagName('li');
    
    //   for(i=0; i<li.length; i++) {
    //     var a = li[i].getElementsByTagName('li')[0];
    //     if(a.innerHTML.toUpperCase().indexOf(FilterValue) > --1) {
    //       li[i].style.display="";
    //     }else {
    //       li[i].style.display="none";
    //     }
    //   }
    // }                                                             
    
        // const list = document.getElementById('element');

    // function setList(group) {
    //   clearList();
    //   for (const properties of group) {
    //     const item = document.querySelector('.list-group-item');
    //     const text = document.getElementById(properties.tipologia);
    //     item.appendChild(text);
    //     list.appendChild(item);
    //   }
    //   if(gropup.length === 0) {
    //     setNoResults();
    //   }
    // } 
    
    // function clearList() {
    //   while (list.firstChild) {
    //     list.removeChild(list.firstChild);
    //   }

    // }

    // function setNoResult() {
    //   const item = document.querySelector('.list-group-item');
    //   const text = document.getElementById(properties.tipologia);
    //   item.appendChild(text);
    //   list.appendChild(item);
    // }

    // function getRelevancy(value, searchTerm) {
    //   if (value === searchTerm) {
    //     return 2;
    //   } else if(value.startsWith(term)) {
    //     return 1;
    //   } else if(value.includes(searchTerm)) {
    //     return 0;
    //   } else {
    //     return -1;
    //   }
    // }
    
    // const searchInput = document.getElementById('search');

    // searchInput.addEventListener('input', (event) => {
    //   const value = event.target.value;
    //   if (value && value.trim().length > 0) {
    //     value = value.trim().toUpperCase();
    //     setList(propiedades.filter(property => {
    //       return property.tipologia.includes(value);
    //     }).sort((propertyA, propertyB) => {
    //       return getRelevancy(propertyB.tipologia, value) - getRelevancy(propertyA.tipologia, value);
    //     }));
    //   } else {
    //     clearList();
    //   }
    //   //console.log(event.target.value);
    // });