import React from 'react';
import Header from '../header/header';
import Banner from '../banner/banner';

class Main extends React.Component{
    render() {
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
            </div>
        )
    }
}

export default Main;