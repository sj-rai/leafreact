import React from 'react';
import SearchBox from './SearchBox';
import Maps from './Maps';
function App() {
 return(
  <div style={{border: "2px solid blue", display: "flex", flexDirection: "row", height: "100vh", width: "100vw"}}>
  <div style={{border: "2px solid blue", width:"50vw", height: "100%"}}>
    <Maps />
  </div>
  <div style={{border: "2px solid blue", width:"50vw"}}>
    <SearchBox />
  </div>
  </div>
 )
}

export default App;
