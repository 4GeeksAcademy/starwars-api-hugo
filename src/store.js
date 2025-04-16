export const initialStore = () => {

  return {
    message: null,
    people: [],
    singlevehicle: [],
    planets: [],
    singleplanet: [],
    vehicles: [],
    todos: [],
    display: Array(100).fill('hidden'),
    displayP:Array(50).fill('hidden'),
    displayV:Array(30).fill('hidden')

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_people':

      return {
        ...store,
        people: action.value
      };
    case 'add_planets':

      return {
        ...store,
        planets: action.value
      };
    case 'add_vehicles':

      return {
        ...store,
        vehicles: action.value
      };
    case 'add_favorite_people':

      return {
        ...store,
        todos: [...store.todos, action.value]
      };
    case 'add_favorite_planet':

      return {
        ...store,
        singleplanet: [...store.singleplanet, action.value]
      };
    case 'add_favorite_vehicle':

      return {
        ...store,
        singlevehicle: [...store.singlevehicle, action.value]
      };


    case 'delete_favorite_people':

      return {
        ...store,
        todos: action.value
      };

    case 'add_singlePeople':

      return {
        ...store,
        singlePeople: action.value
      };
    case 'delete_favorite_planet':

      return {
        ...store,
        singleplanet: action.value
      };
    case 'delete_favorite_vehicle':

      return {
        ...store,
        singlevehicle: action.value
      };

    case 'change_display':
      const updatedDisplay = [...store.display];
      updatedDisplay[action.index] = action.value;
      return {
        ...store,
        display: updatedDisplay,
      };
      case 'change_displayP':
      const updatedDisplayP = [...store.displayP];
      updatedDisplayP[action.index] = action.value;
      return {
        ...store,
        displayP: updatedDisplayP,
      };
      case 'change_displayV':
      const updatedDisplayV = [...store.displayV];
      updatedDisplayV[action.index] = action.value;
      return {
        ...store,
        displayV: updatedDisplayV,
      }

      throw Error('Unknown action.');
  }
}
