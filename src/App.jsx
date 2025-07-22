import { useState } from 'react'
import './App.css'
import FilterTable from './components/FilterTable';
import Countdown from './components/Countdown';

function App(){
  return(
    <div className='p-6 max-w-2xl mx-auto'>
      
      <Countdown />
    </div>
  )
}
export default App;
