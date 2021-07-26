import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {

  render() {
    return (
      <div>
        {/* We are creating a new instances of the Main class component */}
        <Header/>
        <Main />
        <Footer />
        

      </div>
    );
  }
}

// we exported our App component to be visible for other components to use
export default App;
