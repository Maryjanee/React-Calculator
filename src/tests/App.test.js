/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../components/App';


it ('renders without crashing', ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<App />, div)
}) 




