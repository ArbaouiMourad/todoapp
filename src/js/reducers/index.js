const initialState = {
  todo: [{ id: "1", title: "hhhh" , isCompleted: false}]
};

const Reducer = (state = initialState, action) => {
  if (action.type === "ADD_ITEM") {
    return { ...state, todo: state.todo.concat(action.payload) };
  } else if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      todo: state.todo.filter(el => el.id !== action.payload)
    };
  } else if(action.type==="COMPLETE_ITEM"){
      return{
        ...state,
        todo: state.todo.map(el=>el.id === action.payload ? { ...el, isCompleted: !el.isCompleted } : el)
      }
  } else if(action.type==="EDIT_ITEM"){
    return{
      ...state,
      todo: state.todo.map(el =>  el.id === action.payload.id?{...el,title:action.payload.title}:el  )

    }
}
  else {
    return state;
  }
};

export default Reducer;
