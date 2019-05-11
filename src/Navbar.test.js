
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('cuando route es "signin" muestra el texto register', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar route="signin"/>, div);
    const a = div.querySelector(".position");
    console.log(a.textContent);
    expect(a.textContent).toBe("Register");
    ReactDOM.unmountComponentAtNode(div);
  });

  it('cuando route es "" muestra el texto signin', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar route=""/>, div);
    const a = div.querySelector(".position");
    console.log(a.textContent);
    expect(a.textContent).toBe("Sign In");
    ReactDOM.unmountComponentAtNode(div);
  });
