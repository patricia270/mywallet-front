import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/sign-up' exact>
          <SignUp />
        </Route>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
