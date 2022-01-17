import React, { useState } from "react";

const Tabs = props => {
    const content = {
        tab1: 'Tab 1 content is showing here.',
        tab2: 'Tab 2 content is showing here.',
        tab3: 'Tab 3 content is showing here.'
    }

    const {tab1, tab2, tab3} = content
    const[input, setInput] = useState(tab1)

    const onClickHandler = (e,value) => {
        setInput(value);
    }

    return (
        <div>
            <div>
                <button className="btn btn-primary m-1" onClick = {(e)=> onClickHandler(e, tab1) }>Tab 1</button>
                <button className="btn btn-primary m-1" onClick = {(e)=> onClickHandler(e, tab2) }>Tab 2</button>
                <button className="btn btn-primary m-1" onClick = {(e)=> onClickHandler(e, tab3) }>Tab 3</button>
            </div>
            <div>
                <p>{input}</p>
            </div>
        </div>

    );
}

export default Tabs;