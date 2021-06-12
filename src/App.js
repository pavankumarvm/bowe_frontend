import { Route, Switch } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

// import Courses from "./components/coursesComponent";
// import Login from "./components/loginComponent";
// import Register from "./components/registerComponent";
import About from "./components/aboutComponent";
import Home from "./components/homeComponent";
import ComingSoon from "./components/comingsoonComponent";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/courses" component={ComingSoon} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={ComingSoon} />
          <Route path="/register" component={ComingSoon} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
