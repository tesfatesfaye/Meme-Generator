import React,{useState,useEffect} from 'react'
import './App.css'
import Form from './components/Form'
import Nav from './components/Nav'



function App() {
  const[memeFile,setMemeFile]=useState(()=>[])
   const cll=()=>{
    setChangeBack(prev=>!prev)
  }
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then(res=> res.json())
    .then(data=>setMemeFile(data.data.memes))
     
  },[])
   
  const randomImage=()=>{
    let randomNumber=Math.floor(Math.random()*memeFile.length);
    let img=memeFile[randomNumber]
    return(memeFile[randomNumber])
}


const[meme, setMeme]=useState({topText:"",bottomText:"", randomImage: randomImage()})
function handleChange(event){
  const {name,value}=event.target
  setMeme(x=>{
       return {...x, [name]:value}
   })
}
function handleClick(){
  setMeme(x=>{
      let randomNumber=Math.floor(Math.random()*memeFile.length);
      return{...x, randomImage:memeFile[randomNumber].url }
  })
}

  return (
    <div className="App">
      <Nav />
      <Form 
      memeFile={memeFile}
      meme={meme}
      handleChange={handleChange}
      handleClick={handleClick}
      />
   
    </div>
  )
}

export default App
