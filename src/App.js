import React from 'react';
import './App.scss';
import ButtonClick from './ButtonClick.js'
import ChangeBg from './ChangeBg.js'
import networkerspic from './networkerspic.png'
import networkerspic2 from './networkerspic2.png'
import networkerspic3 from './networkerspic3.png'
import networkershot from './networkersshot.png'


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

    

      <div id='window'> 
          
          </div>

          <div id="intro">
                <h1 id="hi">Hi, I'm Colm </h1>               
                <h2 id="welcome">Welcome to my Portfolio </h2>
      </div>
              

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
      
      <h3> My Projects </h3>
<div className="project" id="first">
    <div className="image-container">
        <img src={networkerspic} />
        <img src={networkerspic2} />
        <img src={networkerspic3} />
        <img src={networkershot} />        
    </div>
</div>




  </div>
  );
}

export default App;
