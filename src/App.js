import { lazy ,Suspense} from 'react';
import{BrowserRouter , Routes , Route} from'react-router-dom'
import './App.css';
// import Signup from './components/signup.jsx'
// import Login from './components/login.jsx'
const Signup =lazy(()=>import("./components/signup.jsx"))
const Login=lazy(()=>import("./components/login.jsx"))
const Subject=lazy(()=>import("./components/subject.jsx"))
function App() {
  return (
   <>
   <Suspense fallback={<div className='w-100 h-100 text-center mt-1'> <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div></div>}>
   <BrowserRouter>
   <Routes>
   {
    ["Signup","/"].map((path,index)=>(
<Route path={path} element={<Signup/>} key={index}></Route>
    ))
   }
<Route path='login' element={<Login/>}></Route>
<Route path='subject' element={<Subject/>}></Route>
   </Routes>
   </BrowserRouter>
   </Suspense>

</>
  );
}

export default App;
