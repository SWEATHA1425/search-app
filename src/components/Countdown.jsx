import React from "react";
import { useState, useEffect } from "react";
import FilterTable from "./FilterTable";
function Countdown(){
    const [time, setTime] = useState(5);
    const [showButton, setShowButton] = useState(false);
    const [showApp, setShowapp] = useState(false);

    useEffect(()=>{
        if(time===0){
            setShowButton(true);
            return;
        }
        const timer = setInterval(() =>{
            setTime((prev) => prev -1);
        },1000)

        return ()=>clearInterval(timer);
    },[time])

    if (showApp) {
    return <FilterTable />;
    }

    return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Search App</h1>

      {!showButton ? (
        <p className="text-lg">Loading... {time}</p>) : (
        <button
          onClick={() => setShowapp(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Start App</button>
      )}
    </div>
  );
}

export default Countdown;