// import { StrictMode } from 'rea   ct'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
    <App />

)




//things to remember 

//a funcion componetn will always return HTML
// we can not write anything after return 
// we can only return single data/entity/variable/value
//(return <div> </div> <div></div> this will not woerk the jsx will have to have only onereturn value. this can be acheived if we used fragment tag that is react tag)
// there must be single return in a function and that must be the last statement

