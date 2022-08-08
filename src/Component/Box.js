import React, { useState, useContext } from 'react';
// import PageContextEdit from './PageContextEdit';
import PageContext from './PageContext';

const Box = (props) => {
    
    // const context = useContext(PageContextEdit);
    const {edit, updateEdit, id, updateId, show, updateShow} = useContext(PageContext);
    const [backColor, setBackColor] = useState("#191919");
    const [classN, setClassN] = useState("0");

    const styleBox = {
        height:props.height,
        width:props.width,
        outline : "1px solid #fcfcfc",
        backgroundColor:backColor,
    };

    const handleClick = event => {

        console.log(edit);

        if(edit === false){

            if(event.currentTarget.className === "0"){
                setBackColor("#235dbe");
                setClassN("1");
            }
            
            if(event.currentTarget.className === "1"){
                setBackColor("#191919");
                setClassN("0");
            }
        }
        if(edit === true){
            updateId(event.currentTarget.id);
            updateShow('block');
            
        }


    }

    return (
        <div id={props.id} className={classN} style={styleBox} onClick={handleClick}>
            {props.text}
        </div>
    );
}

export default Box;