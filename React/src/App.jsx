import React from "react";
//non parameterized function

const  handleclick = () =>{
  alert("Button clicked!");
}
const mesg = (msg) =>{
  console.log(msg);
}
//we have to use an extra function for parameterize function to pass in the even hsndler

const wrapper = () =>{
  mesg("thid i d fgg");
}
//another way for single line
const wrapper2 = () => mesg("thid i d fgg");
const arr = [
  {name:"jessi",age:20},
  {name:"kunwar",age:22}
];
// For every item (profile) in the array, a <li> element is returned.
const updatedprofiles = arr.map((profile,index)=>{
  return(
    <li key={index}>
      <h2>name : {profile.name} | age : {profile.age}</h2>
    </li>

  );
})
const App = () => {
  return (
    <>
      <div>hello react app</div>
      <div>this is me</div>
      <button onClick={handleclick}>Click</button>
      <button onClick={() => mesg("thid i d fgg")
}>Click</button>
<ol>{updatedprofiles}</ol>

    </>
  );
};

export default App;
