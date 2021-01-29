import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routerComponents from "./router-components/routerComponents";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {home, newLesson} = routerComponents
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={home.path} component={home.component} exact/>
                    <Route path={newLesson.path} component={newLesson.component}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
