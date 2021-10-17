import  {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Decode from "./Components/Decode/Decode";
import Encode from "./Components/Encode/Encode";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App=()=>{
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/decode" exact>
          <Decode/>
        </Route>
        <Route path="/encode" exact>
          <Encode/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
