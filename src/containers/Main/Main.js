import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {mainAction} from './actions';
import logo from "../../logo.svg";

import './Main.css'

class Main extends Component {
    render() {
        const {
            mainProp,
            mainAction
        } = this.props;

        console.log('MAIN PROP:', mainProp);

        const display = mainProp === 'NOT CLICKED' ? 'Click Logo' : `Data Retrieved:  ${mainProp.data.title}`;

        return (
            <div className="Main">
                <div>React-Redux BoilerPlate</div>

                <img src={logo}
                     className="App-logo" alt="logo"
                     onClick={() => {
                         mainAction('CLICKED')
                     }}/>
                <div>{display}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mainProp: state.mainReducers.mainProp,
    }
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({mainAction}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
