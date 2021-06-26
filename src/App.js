import { Route, Switch } from "react-router-dom";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

// import Courses from "./pages/courses/coursesComponent";
// import Login from "./pages/login/loginComponent";
// import Register from "./pages/register/registerComponent";
import About from "./pages/about/aboutComponent";
import Home from "./pages/home/homeComponent";
import ComingSoon from "./components/comingsoon/comingsoonComponent";

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
