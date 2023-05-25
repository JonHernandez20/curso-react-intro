
import React from 'react';

// const TodosInfo = [
//   { text: "Tender ropa", finished: false},
//   { text: "LLevar a los perros al parque", finished: false},
//   { text: "Ir al mercado", finished: false},
//   { text: "Usar estados derivados", finished: false},
//   { text: "Entrenar Kick Boxing", finished: false },
//   { text: "Lavar al perro", finished: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(TodosInfo));
// localStorage.removeItem('TODOS_V1');

function useLocalStrorage (itemName, initialValue) {

    // Valid LocalStrorage
    const localStrorageItem = localStorage.getItem(itemName);
    let parsedItem;
    if (!localStrorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStrorageItem);
    }
  
    // Propio estado
    const [ item, setItem ] = React.useState(parsedItem);
  
    // Guardar todos
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      
      setItem(newItem);
    };
  
    return [item, saveItem];
}

export { useLocalStrorage };
