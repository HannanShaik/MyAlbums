import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            title: 'My NEw Title'
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
        setTimeout(() => {
            //do something
            this.setState({ title : 'Hannan is good!', showPopup: true});
    },2000);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    renderPopup() {
        alert('hello i am a popup');
    }

    render() {
        if(this.state.showPopup){
            this.renderPopup();
        }
        return (
            <View>
                <Header title={this.state.title}/>
                <Text> Hello </Text>
            </View>
        );
    }
}

export default App;
