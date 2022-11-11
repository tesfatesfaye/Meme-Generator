import React from 'react'
import './App.css'
import Form from './components/Form'
import Nav from './components/Nav'



function App() {
  const[memeFile,setMemefile]=React.useState([])
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then(res=> res.json())
    .then(data=>setMemefile(data.data.memes))
     
  },[])
   
  const randomImage=()=>{
    let randomNumber=Math.floor(Math.random()*memeFile.length);
    let img=memeFile[randomNumber]
    return(memeFile[randomNumber])
}


const[meme, setMeme]=React.useState({topText:"",bottomText:"", randomImage: randomImage()})
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
