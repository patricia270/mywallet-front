import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Registries from "./Pages/Registries";
import NewInput from "./Pages/NewInput";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <SignIn />
        </Route>
        <Route path='/sign-up' exact>
          <SignUp />
        </Route>
        <Route path='/registries' exact>
          <Registries />
        </Route>
        <Route path='/inputs' exact>
          <NewInput />
        </Route>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
