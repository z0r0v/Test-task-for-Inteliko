import React, {useState} from "react";
import './app.scss'

export default function App() {
    let array;
    const isDataTrue = (array) => {
        if (array) {
            return (
                array
            );
        } else {
            return ([
                {label: "your data", value: true, id: 1},
                {label: "your data not", value: false, id: 2},
            ]);
        }
    };

    // here some JSON.parse();
    array = [
        {label: "is", value: true, id: 1},
        {label: "is not", value: false, id: 2},
    ];

    // uncomment if array not found (undefined);
    array = undefined;

    const [data, setData] = useState(isDataTrue(array));

    //I would like to take labels and inputs into separate components.
    // But the technical task requires one component.
    return (
        <div className="app">
            <form action="" className="app__form">
                <input
                    type="radio"
                    id={data[0].id}
                    name="form"
                    value={data[0].value}
                    checked="true"
                />
                <label
                    className="app__form--button-green"
                    htmlFor={data[0].id}>
                    {data[0].label}
                </label>
                <input
                    type="radio"
                    id={data[1].id}
                    name="form"
                    value={data[1].value}
                />
                <label
                    className="app__form--button-pink"
                    htmlFor={data[1].id}>
                    {data[1].label}
                </label>
            </form>
        </div>
    );
};



