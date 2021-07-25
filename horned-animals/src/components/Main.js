import React from 'react';

import HornedBeasts from './HornedBeasts';

class Main extends React.Component {

    render() {
        return (
            <main>
                <HornedBeasts
                    title="OX"
                    description="A Sweet OX"
                    img="https://i.guim.co.uk/img/media/b2f7a8ee3711a3eb12961a75a470d1857595bc98/0_290_5184_3110/master/5184.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7fde337ca62dbf1d48981418d69e11ae"

                />
                <HornedBeasts
                    title="Unicorn"
                    description="A Huge Unicorn"
                    img="https://www.aljazeera.net/wp-content/uploads/2015/08/ba03d068-90f2-4d88-91d6-3484b311ded1.jpeg?fit=686%2C515"
                />
            </main>
        )
    }
}

export default Main;