import React, { useState } from 'react';
import Box from './Box';
// import PageContextSize from './PageContextSize';
// import PageContextEdit from './PageContextEdit';
import PageContext from './PageContext';
import ChoiceSize from './ChoiceSize';
import EditBox from './EditBox';

const MainBox = () => {
    
    const [sizeValue, setSizeValue] = useState();
    const [edit, setEdit] = useState();
    const [show, setShow] = useState('none');
    const [inputValue, setInputValue] = useState('');

    const [idValue, setIdValue] = useState('');

    
    const styleBlockInput = {
        display: show,
    }
    
    const styleBack = {
        height: '100vh',
        width: '100vw',
        backgroundColor:'black',
        opacity:'0.5',
        position:'absolute',
        top:'0',
        left:'0',
        // display: show,
    };
    
    const styleCanvas = {
        height: '50vh',
        width: '60vw',
        backgroundColor:'#a6a6a6',
        top:"25vh",
        left:"20vw",
        position:'absolute'
    
    };

    const slot = [];
    let x = sizeValue;

    let yh = 80;
    let yw = 70;

    let yxh = yh/x;
    let yxw = yw/x;

    let xyw = yxw + "vw";
    let xyh = yxh + "vh";

    
    for (let i = 0; i < x*x; i++) {
        slot.push(i);
    }

    
    const contextValue = {
        edit: edit,
        updateEdit: setEdit,
        size : sizeValue,
        updateSize : setSizeValue,
        id : idValue,
        updateId : setIdValue,
        input : inputValue,
        updateInput : setInputValue,
        show : show,
        updateShow : setShow,
    };

    const handleClickButton = () => {
        setInputValue('');
        if(idValue !== ''){
            document.getElementById(idValue).innerHTML = inputValue;

        }
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    

    return (
        <PageContext.Provider value={contextValue}>
        {/* <PageContextSize.Provider value={contextValueSize}> */}
            {/* <PageContextEdit.Provider value={contextValueEdit}> */}
                <ChoiceSize/>
                <EditBox/>
                {/* <div className="MainBox" style={{height:yh+"vh",width:yw+"vw"}}> */}
                <div className="MainBox" style={{height:yh+"vh",width:yw+"vw"}}>
                    {slot.map((index) => <Box id={index+1} width={xyw} height={xyh} key={index}/>)}
                </div>

                <div className='blockInput' style={styleBlockInput}>
                    <div className='backgr' style={styleBack} onClick={() => {
                        if(show === 'none'){setShow('block')}
                        else if(show === 'block'){setShow('none')}
                    }}>
                    </div>
                    <div className='canvas' style={styleCanvas}>
                        <input type="text" className='inputChangeText' onChange={handleChange} value={inputValue}/>
                        <button onClick={handleClickButton}>Submit</button>
                    </div>
                </div>
            {/* </PageContextEdit.Provider> */}
        {/* </PageContextSize.Provider> */}
        </PageContext.Provider>
    );
}

export default MainBox;