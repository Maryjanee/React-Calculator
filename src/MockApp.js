import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Calculator from './components/pages/Calculator';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';

const MockApp = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
    </div>
  </BrowserRouter>
);

export default MockApp;
