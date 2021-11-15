import {useState} from "react";
import SignInSingUp from "./page/singInSignUp";
function App() {

  const [user, setUser] = useState(null);

  return (<div>{user ? <SignInSingUp /> : <h1>No estas logueado</h1>}
   
  </div>)


}

export default App;
