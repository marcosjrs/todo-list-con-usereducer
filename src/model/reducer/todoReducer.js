//action está compuesto por {type, payload}
export const todoReducer = (state=[], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      console.log('remove ¿?', action.payload, state);
      return state.filter((todo)=>(todo.id !== action.payload));
    default:
      throw new Error();
  }
};