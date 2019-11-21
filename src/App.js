import React, { Component } from "react";
import Burger from "./components/Burger/Burger.jsx";
import Ingridients from "./components/Ingridients/Ingridients.jsx";
import "./App.css";

const ingridientsInfo = [
  { name: "meat", price: 50, image: "fa-drumstick-bite text-danger" },
  { name: "cheese", price: 20, image: "fa-cheese text-warning" },
  { name: "salad", price: 5, image: "fa-leaf text-success" },
  { name: "bacon", price: 50, image: "fa-bacon text-danger" }
];

class App extends Component {
  state = {
    ingridients: []
  };

  addIngridient = name => {
    const ingridients = [...this.state.ingridients,name];
    this.setState({ ingridients });
  };

  removeIngridient = name => {
    const ingridients = [...this.state.ingridients];
    const indexElem = ingridients.lastIndexOf(name);
    if (indexElem >= 0) {
      ingridients.splice(indexElem, 1);
    }
    this.setState({ ingridients });
  };

  render() {
    return (
      <div className="w-75 mx-auto d-flex vh-100 align-items-center flex-sm-column flex-md-row">
        <Ingridients
          addIngridient={this.addIngridient}
          ingridientsInfo={ingridientsInfo}
          ingridients={this.state.ingridients}
          removeIngridient={this.removeIngridient}
        />
        <Burger ingridients={this.state.ingridients} ingridientsInfo={ingridientsInfo}/>
      </div>
    );
  }
}

export default App;
