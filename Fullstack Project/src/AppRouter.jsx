// AppRouter.js
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
