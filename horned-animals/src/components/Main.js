import React from 'react';
import HornedAnimals from './HornedAnimals.json';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component{
  render(){
    return(
        <>
        {HornedAnimals.map((item,index)=>{
            return(
        <HornedBeasts
        title={item.title}
        image_url={item.image_url}
        description={item.description}
        key={index}
        />

        )
        
    })}
    </>

    )
  }
}


export default Main;