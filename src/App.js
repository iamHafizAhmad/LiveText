import logo from './logo.svg';
import './App.css';
import Prop from './Components/Prop';
import TextForm from './Components/TextForm';
import { useState } from 'react';

function App() {
  const togMode= ()=>{
        if(mode=== 'light'){
          setMode ('dark');
          document.body.style.backgroundColor='grey';
        }
        else{
          setMode('light');
          document.body.style.backgroundColor='white';
        }
  }
  const [mode, setMode] = useState('light');
  return (
    <>
<Prop title="MyWebsite" mode={mode} togMode={togMode}/>
<TextForm title="Enter Text here"  mode={mode} />
</>
  );
}

export default App;
