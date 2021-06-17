import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router';
import Main from './containers/Main/Main';
import About from './containers/About/About';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/service' component={About} />
        <Route path='/' component={Main} exact />
      </Switch>
    </Layout>
  );
}

export default App;
