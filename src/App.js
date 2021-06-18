import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router';
import Main from './containers/Main/Main';
import About from './containers/About/About';
import Partners from './containers/Partners/Partners';
import Guarantee from './containers/Guarantee/Guarantee';
import Contacts from './containers/Contacts/Contacts';
import FAQ from './containers/FAQ/FAQ';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/faq' component={FAQ} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/service' component={About} />
        <Route path='/garanty' component={Guarantee} />
        <Route path='/partners' component={Partners} />
        <Route path='/' component={Main} exact />
      </Switch>
    </Layout>
  );
}

export default App;
