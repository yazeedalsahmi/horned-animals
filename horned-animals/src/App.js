// first we are import the react library
import React from 'react';
import './App.css';
// we are going to import the class based component file 
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
// we created our first Class based Component
// we inherited properties and behaviors from the React Component Class
class App extends React.Component {

  render() {
    return (
      <div>
        {/* We are creating a new instances of the Main class component */}
        <Header/>
        <Main />
        <Footer />
        

      </div>
    )
  }
}

// we exported our App component to be visible for other components to use
export default App;