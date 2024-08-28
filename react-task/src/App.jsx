import React from 'react'
import './App.css'
import Usememo from './components/Hooks/Usememo'
import Ratings from './components/PRACTICES/Ratings'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './components/Router/About'
import Contact from './components/Router/Contact'
import Tasksss from './components/PRACTICES/Tasksss'
// import Parentcomponent from './components/PRACTICES/Parentcomponent'
// import Count from './components/PRACTICES/Count'
// import Title from './components/PRACTICES/Title'


// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Home from './Blog/Home'
// import Signin from './Blog/Signin';
// import Signup from './Blog/Signup';
// import Firstpage from './Blog/Firstpage';

 

// import Doctitleone from './components/PRACTICES/Doctitleone'
// import Counterone from './components/PRACTICES/Counterone'
// import Countertwo from './components/PRACTICES/Countertwo'
// import Taskaman from './components/PRACTICES/Taskaman'

// import Practiced2 from './components/Practiced2'

// import Maincompo from './components/PRACTICES/Maincompo'

// import Memocomponent from './components/Memocomponent'
// import Logic from './components/Logic'
// import Machine from './components/Machine'
// import Rating from './components/Rating'
// import Logic2 from './components/Logic2'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Homepage from './components/Homepage'
// import Aboutpage from './components/Aboutpage'
// import Contact from './components/Contact'
// import Router from './components/Router'
// import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
// import Settings from './components/Settings'
// import Homepage2 from './components/Homepage2'
// import Users from './components/Users'

function App() {

  // const [count,setCount] =  useState(0)
  // const [color,setColor] = useState('red')

  return (
    <div>



      {/* // <div style={{background:color}}> 
  //   <h1>Count : {count}</h1>
  //   <button onClick={()=>{
  //     setCount(count+1)
  //     setColor(count%2==0?'blue':'red')
  //   }}>Click</button>
  </div> */}

      {/* <Memocomponent name={'nishana'} age={29}/> */}
      {/* <Logic/> */}
      {/* <Machine/> */}
      {/* <Rating/> */}
 
      {/* <BrowserRouter>
       <Router/>
     <Routes>
      <Route path='/'element={<Firstpage/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<Signin/>}/>
     </Routes>
  </BrowserRouter>  */}



      {/* <Logic2/> */}
      {/* <BrowserRouter>
      <Link to="Settings">Settings</Link>
      <Link to="Homepage2">Homepage2</Link>
      <Link to="Users">Users</Link>
      
        <Routes>
          <Route  path='/settings' element={<Settings/>} />
          <Route  path='/homepage2' element={<Homepage2/>} />
          <Route  path='/Users' element={<Users/>} />

       </Routes>
      </BrowserRouter> */}

{/* <Doctitleone />
<Counterone />
<Countertwo />
<Taskaman/> */}
{/* <Parentcomponent />
<Count />
<Title /> */}
<Usememo />
<Ratings/>

<BrowserRouter>

<Link to="About">About</Link>
<Link to="Contact">Contact</Link>
 
<Routes>

<Route path='/about'element={<About/>} />
<Route  path='/contact' element={<Contact/>}/>

</Routes>
</BrowserRouter>
<Tasksss/>




    
    
      




    </div>
  )
}

export default App
