import React, { useContext, useState } from 'react';
// import PageContextSize from './PageContextSize';
// import PageContextEdit from './PageContextEdit';
import PageContext from './PageContext';

const ChoiceSize = () => {

    // const {size, updateSize} = useContext(PageContextSize);
    // const {edit, updateEdit} = useContext(PageContextEdit);

    const {edit, updateEdit, size, updateSize} = useContext(PageContext);
    
    const [show, setShow] = useState(false);

    const styleRed = {
        color:"red",
        display: show ? "block" : "none",
    }
  
    const handleChangeButton = () => {

        if(edit){

            const target = document.getElementById("InputSizeValue");
            let val = target.value;
    
            if(val > 20 || val < 1){
                setShow(true); 
            }

            else if(val >= 1 && val <= 20){
                setShow(false);
                updateSize(val);
            }
        }
    }

    const changeCheckBox = () => {

        const targ = document.getElementById("editCheckBox");
        let valu = targ.checked;

        valu ? updateEdit(true) : updateEdit(false);
        
    }

    return (
        <div id="ChoiceSize">

            <div className="flex">
                <input
                    name="InputSizeValue"
                    id="InputSizeValue" 
                    defaultValue={size}
                    type="number" min="1" max="15" 
                    placeholder="Size of the bingo (1 to 15)" 
                    onChange={handleChangeButton}
                    >
                </input>
                Taille du bingo :{size}x{size}

                {/* <button onClick={handleChangeButton}>Submit</button> */}
            </div>

            <div className="flex">
                <div id="divError" style={styleRed}>Try with a valid number (1 to 15)</div>
            </div>

            <div className="flex">
                <label className="container">Edit
                    <input id="editCheckBox" type="checkbox" onChange={changeCheckBox}/>
                </label>
            </div>

        </div>
    );
}

export default ChoiceSize;