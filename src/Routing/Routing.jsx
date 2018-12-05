import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignUpPage from "../Component/SignUpPage";
import Ticket from "../Component/Ticket";

// PUBLIC


class Routing extends Component{
    componentDidMount() {
        this.authenticate().then(()=> {
                const ele = document.getElementById('ipl-progress-indicator')
                if (ele){
                    ele.classList.add('available')
                    setTimeout(() => {
                        ele.outerHTML = ''
                    })
                }
            }
        )
    }
    authenticate(){
        return new Promise(resolve => setTimeout(resolve, 2000))
    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={SignUpPage}/>
                        <Route exact path="/ticket" component={Ticket}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default Routing
