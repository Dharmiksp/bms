import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Upcoming from "./Components/Upcoming/Upcoming";
import Search from "./Components/Search/Search";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={Movies} exact />
        <Route path="/upcoming" component={Upcoming} exact />
        <Route path="/search" component={Search} exact/>
      </Switch>
    </Router>
  );
};

export default App;