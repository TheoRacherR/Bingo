import React from "react"

export default React.createContext({
    id : "",
    updateId : () => {},
    input: "",
    updateInput : () => {},
    edit : false,
    updateEdit : () => {},
    size : "",
    updateSize : () => {},
    show : 'none',
    updateShow : () => {},
});