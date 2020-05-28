import React, {Component} from "react";
import './app.scss'

export default class App extends Component {

    state = {
        todoData: [
            {label:"is", value:true, id:1 },
            {label:"is not", value:false, id:2 },
        ]
    };

    //I would like to take labels and inputs into separate components.
    // But the technical task requires one component.

    render() {
        const {todoData} = this.state;
        return (
            <div className="app">
                <form action="" className="app__form">
                    <input
                        type="radio"
                        id={todoData[0].id}
                        name="form"
                        value={todoData[0].value}
                        checked="true"
                    />
                    <label
                        className="app__form--button-green"
                        htmlFor={todoData[0].id}>
                        {todoData[0].label}
                    </label>
                    <input
                        type="radio"
                        id={todoData[1].id}
                        name="form"
                        value={todoData[1].value}
                    />
                    <label
                        className="app__form--button-pink"
                        htmlFor={todoData[1].id}>
                        {todoData[1].label}
                    </label>
                </form>
            </div>
        );
    }
}


