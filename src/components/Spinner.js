import React from 'react'
import loadinga from "./loadinga.gif";

const Spinner=()=>{
    return (
      <div className="text-center">
        <img className="my-3" src={loadinga} alt="loading" />
      </div>
    )
}

export default Spinner
