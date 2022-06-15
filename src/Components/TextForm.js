import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

const Uclick = ()=>{
          let Ntext=text.toUpperCase();
          setText(Ntext);

}
const Lclick = ()=>{
    let Ntext=text.toLowerCase();
    setText(Ntext);

}
const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
const OnChange = (event)=>{
    setText(event.target.value);

}

const LineText = (event)=>{
  let x = text.split(".");
  let html="";
  x.forEach(function(text,index){
  
    if(text==""){

    }
    else {
       html +=`<div>${index+1} : ${text} </div>`; 
    }
  });
  document.getElementById("x1").innerHTML=html;
  

}


const C1 = ()=>{
  let x = text.split(".");
  let htm=""
  x.forEach(function(text,index){
    let fg=x[index].charAt(0);
    let re,h,z;
    if(fg===" "){
       fg=x[index].charAt(1);
       console.log(fg);
       h=x[index].slice(2);
       
       z=fg.toLocaleUpperCase();
       console.log(z);
    
      re=z+h;
     x[index]=re;
    }
    else{
     h=x[index].slice(1);
     z=fg.toLocaleUpperCase();
  
    re=z+h;
   x[index]=re;
    }

   if(index===0){
    htm+=x[index];
  }
  else{
    htm+="." + x[index];
  }
  });
  setText(htm);
   

}






    const [text, setText] = useState('Enter Text here');
    
    
  return (
    <div>
         
<div className="mb-3">
   <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
       <h1 className='my-3'>{props.title}</h1>
  <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'} bg-${props.mode}` } value={text} onChange={OnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="btn btn-primary my-3" onClick={Uclick}>UPPER-CASE</button>
  <button className="btn btn-primary my-3 mx-3" onClick={Lclick}>lower-case</button>
  <button className="btn btn-primary my-3 mx-3" onClick={C1}>1st word capital</button>
  <button className="btn btn-primary my-3 mx-3" onClick={LineText}>Show Lines</button>
  <button  onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  <div className="mx-3">{text.split(" ").length} word and {text.length} character and {text.split(".").length-1} Sentences</div>
  <div className='my-3'><b>Separte Lines</b></div>
  <div className="my-1" id="x1"></div>
</div>
</div>
    </div>
  )
}
