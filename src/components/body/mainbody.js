import React, { Component } from 'react';
import Journey from './content/journey/Journey';
import Payment from './content/payment/payment';
import Reload from './content/reload/reload';
import Travels from './content/travels/travels';
import Status from './content/status/status';
import Home from './content/home/home';

class MainBody extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loadedContent : "home"
         }
    }


    setMainBodyContent(cont){
        this.setState({loadedContent : cont});
    }

    render() { 
        let loadcontent;

        if(this.state.loadedContent==="journey"){
            loadcontent = (
                <Journey/>
            );
        }
        else if(this.state.loadedContent==="status"){
            loadcontent = (
                <Status/>
            );
        }
        else if(this.state.loadedContent==="travels"){
            loadcontent = (
                <Travels/>
            );
        }
        else if(this.state.loadedContent==="reload"){
            loadcontent = (
                <Reload/>
            );
        }
        else if(this.state.loadedContent==="payment"){
            loadcontent = (
                <Payment/>
            );
        }
        else if(this.state.loadedContent==="home"){
            loadcontent = (
                <Home/>
            );
        }

        return ( 
            <div>
                {loadcontent}
            </div> 
        );
    }
}
 
export default MainBody;