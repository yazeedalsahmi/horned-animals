import React from 'react';
import HornedBeasts from './HornedBeasts';
import HornedAnimals from './HornedAnimals.json';
import Form from 'react-bootstrap/Form';



class Main extends React.Component {

    update = (event) => {
        let hornsNumber = parseInt(event.target.value)
        let allHornes = HornedAnimals;
        let result;
        if (hornsNumber) {
            // eslint-disable-next-line array-callback-return
            result = allHornes.filter(item => {
                if (item.horns === hornsNumber){
                    return item;}
            })

        } else {
            result = allHornes;
        };
        this.props.filterpic(result)
    }


    render() {

        return (

            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select the hornedbeast depend on horned numbe :</Form.Label>
                        <Form.Control as="select" custom onChange={this.update}>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">more and more</option>
                            <option value="a">All</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                {this.props.hornsData.map((item, index) => {
                    return (
                        <HornedBeasts
                            title={item.title}
                            imageUrl={item.image_url}
                            description={item.description}
                            key={index}
                            selected={this.props.selected} />
                    )
                })

                }
            </div>

        )
    }
}

export default Main;
