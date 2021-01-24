import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <BrowserRouter>
    <>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
    </>
  </BrowserRouter>
);

export default App;
