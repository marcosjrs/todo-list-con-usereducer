//action está compuesto por {type, payload}
export const todoReducer = (state=[], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((todo)=>(todo.id !== action.payload));
    case 'toggle':
      return state.map (todo =>
        (todo.id !== action.payload.id) ? todo : {...todo, hecho: !todo.hecho}     
      );
    default:
      throw new Error();
  }
};