import './App.css';
import { Redirect, Route ,  Switch } from 'react-router-dom';
import { Fragment } from 'react';
import CalculateEmission from './Pages/CalculateEmission'
import HomePage from './Pages/HomePage';


const DUMMY = [
  {
    id: 1,
    question: "How often do you travel by air in a year ?",
    options: ["I fly rarely", "Occasionally", "Regularly", "Never"],
  },
  {
    id: 2,
    question: "What describes your diet ?",
    options: [
      "Vegan",
      "Vegetarian",
      "Pescetarian",
      "Ocassionaly eat meat",
      "Regularly eat meat",
    ],
  },
  {
    id: 3,
    question: "How much do you travel by car ?",
    options: [
      "I don't drive",
      "~5000 km",
      "~ 5,000 - 10000 km",
      "~ 10,000 - 15,000 km",
      ">15,000 km",
    ],
  },
  {
    id: 4,
    question: "Which kind of fuel do you use ?",
    options: ["Electric", "Natural gas", "Petrol, Disel"],
  },
  {
    id: 5,
    question: "Tell us something about your shopping habits ?",
    options: ["Rarely", "Average", "Shopper", "Luxary Shopper"],
  },
  {
    id: 6,
    question: "How big is your home ?",
    options: [
      "Sharing",
      "One-Bedroom",
      "Two-bedroom",
      "Three-bedroom",
      "Bunglow",
    ],
  },
  {
    id: 7,
    question: "How many people live in your home ?",
    options: ["Just me", "2 people", "3 people", "4-6 people", " > 7 people"],
  },
  {
    id: 8,
    question: "Which pet do you own ?",
    options: ["None", "Cat", "Dog", "Other"],
  },
  {
    id: 9,
    question: "Do you use renewable energy sources at your home ?",
    options: ["Yes", "Not Yet", "Not Sure"],
  },
];

function App() {
  return (
    <Fragment>
    <Switch>
      <Route path='/' exact>
      <Redirect to='/home' />
      </Route>
      <Route path='/home' exact>
      <HomePage/>
      </Route>
      <Route path='/calculate' exact>
        <CalculateEmission questions={DUMMY}/>
      </Route>
    </Switch>
    </Fragment>
  );
}

export default App;
