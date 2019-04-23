import React, { Component} from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return ( 
      <div className = "App" >
      <Header branding="Contact Manager"/>
      <div className="container">
       <Contact name="john Doe" Email="jdoe@gmail.com" phone="555-555-555"/>
      <Contact name = "grame smith"
            Email = "smith@gmail.com"
            phone = "333-333-333" />

      </div>
     
       </div>
    );
  }
}

export default App;