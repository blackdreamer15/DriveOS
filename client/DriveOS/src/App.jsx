


import React,{useEffect,useState } from 'react'

function App() {
  const [backendData, setbackendData] =useState([{}]) //set variable that will contain backend data from the backend api

  useEffect(() =>{
fetch("/api").then(
  response => response.json()
).then(
  data => {
    setbackendData(data)
  }
)
  }, 
  [])//fetch backend api
  return (
    <div>

     {(typeof backendData.users ==='undefined') ? (
      <p>Loading....</p>
    ) : (
      backendData.users.map((user, i) => (
        <p key={i}> {user}</p>
      ))
    )} 
    </div>
  )
}

export default App

// import React from 'react'
// import { Component } from 'react'
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       notes:[]

//     }
//   }

//   API_URL="http://localhost:5000/api";

//   componentDidMount(){
//     this.refreshNotes();
//   }

//   async refreshNotes(){
//     fetch(this.API_URL+"api/Serviceproviders/GetNotes").then(res=>res.json())
//     .then(data=>{
//       this.setState({notes:data});
//     })
//   }


// render(){
//   const{notes}=this.state;

//   return (
//     <div className='App'>
//       <h2>App</h2>
//       {notes.map(note=>
//       <p>
//         <b>* note.description</b>
//       </p>

//       )}
//     </div>
//   );
// }
// }
// export default App