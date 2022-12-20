
import { useContext } from "react";
import {Navigate} from "react-router-dom";
import { AppContext } from "./AppContext/AppContext";

function PrivateRoute({children}) {
  const {state} = useContext(AppContext);
  if (!state.authLogin) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;
