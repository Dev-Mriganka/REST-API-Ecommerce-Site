
const reducer = (state, action) => {
    switch (action.type) {
      case "countrydata":
        return {...state, country: action.payload}
      case "loadingCountry":
        return {...state, loading: action.payload}
      case "new":
        return {...state, new: action.payload}
      case "designers":
        return {...state, designers: action.payload}
      case "clothing":
        return {...state, clothing: action.payload}
      case "shoes":
        return {...state, shoes: action.payload}
      case "accessories":
        return {...state,accessories: action.payload}
      case "auth":
        return {...state,authLogin: action.payload}
      case "CArt":
        return {...state,forCart: action.payload}
      case "dialog":
        return {...state,dialog: action.payload}
      default:
        return state;
    }
}

export default reducer;