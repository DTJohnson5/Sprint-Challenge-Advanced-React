import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders players in app", () => {
  const app = rtl.render(<App />);
  app.getByText(/players/i);
  console.log(app.debug());
});


it("renders player input", () => {
  const playerInput = rtl.render(<PlayerForm />);
  playerInput.getByTestId(/player/i);
  console.log(playerInput.debug());
});


it("renders country input", () => {
  const playerInput = rtl.render(<PlayerForm />);
  playerInput.getByTestId(/country/i);
  console.log(playerInput.debug());
});