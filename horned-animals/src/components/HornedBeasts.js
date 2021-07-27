import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class HornedBeasts extends React.Component{

    constructor(props){
      super(props)
      this.state={
        vote :0,
        

      }
    }
   
    UserClick=()=>{
      this.setState({
        vote : this.state.vote +1  ,
      })
    }
    handleTheModelOnHornedBeasts= () => {
      this.props.handleTheModel(this.props.title);
    }
  render(){
    return(
      <div className='cards'>
    <Card style={{ width: '18rem' }} onClick={this.handleTheModelOnHornedBeasts}>
    <Card.Img variant="top"  src={this.props.image_url} title={this.props.title} />
    <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>
      {this.props.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick ={this.UserClick}>❤️ </Button>
      <small className="text-muted">   {this.state.vote} </small>
    </Card.Footer>
  </Card>
  </div>
   ) 

  }
}


export default HornedBeasts;