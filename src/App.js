import React from 'react';
import './App.scss';
import ButtonClick from './ButtonClick.js'
import ChangeBg from './ChangeBg.js'

function App() {
  return (
    <div className="App">
      
       {/*<div classNameName="main">

<div classNameName="parallax">
  <div id="stars1"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
</div>

<h1>Hi, I'm Colm</h1>
<h2>Welcome to my Portfolio</h2>
</div>*/}

    <div className='container'>

      <div id='window'></div>
              

      <div id ='rain' className='raindrops'>
        <div className='borders'>

          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
          <div className='border'></div>
        </div>
        <div className='drops'>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
          <div className='raindrop'></div>
        </div>
      </div>
      <ChangeBg />
      <h1 id="hi">Hi, I'm Colm </h1>               
<h2 id="welcome">Welcome to my Portfolio </h2>

<p id="sectionone">Hello and welcome to section 1. Here is where I will talk about this project and have a preview image of it</p>
    </div>
     
  </div>
  );
}

export default App;
