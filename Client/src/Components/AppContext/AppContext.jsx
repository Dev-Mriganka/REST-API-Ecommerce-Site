import { useReducer, useState } from "react";
import { createContext } from "react"
import { AllProductsData } from "../Data/designer";
import reducer from "./reducer";



export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const initState = {
    country: [],
    loading: false,
    new: false,
    designers: false,
    clothing: false,
    shoes: false,
    accessories: false,
    men: { AllProductsData },
    authLogin: false,
    forCart: [],
    dialog:false,
  };
  const [state, dispatch] = useReducer(reducer, initState);
  const [colored, setColored] = useState();
  const [cart, setCart] = useState([]);
console.log(cart);

    return (
            <AppContext.Provider value={{state,dispatch,colored,setColored,cart,setCart}}>
                {children}
        </AppContext.Provider>
    )
}