import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import SelectedBeast from './components/SelectedBeasts';
import HornedAnimals from './components/HornedAnimals.json';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      hornsData : HornedAnimals,
      show : false ,
      selectedAnimal:{}
    };
  };
  filterpic=(horns)=>{
    this.setState({
      hornsData : horns
    })
  }
  selected=(title) =>{
    // eslint-disable-next-line array-callback-return
    let findbeasts = HornedAnimals.find(element => {
      if (element.title === title) {
        return element;
        
      }})
      this.setState({
        show : true,
        selectedAnimal:findbeasts
      })
    }
  
    handleClose=()=>{
      this.setState({
        show : false 
      })
    };
    
    
       

  render() {
    return (
      <>
      <Header/>
      <Main
      hornsData={this.state.hornsData}
      selected={this.selected}
      filterpic={this.filterpic}
      
      />
      <Footer/>
      <SelectedBeast
      show = {this.state.show}
      handleClose={this.handleClose}
      selectedAnimal={this.state.selectedAnimal}
      />
      </>
    )
  };
};


export default App;
