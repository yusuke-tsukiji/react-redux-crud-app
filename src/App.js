import React from "react";

function App() {
  return (
    <React.Fragment>
      <label htmlFor="foo">foo</label>
      <input id="foo" type="text" onChange={() => {console.log("Hi!")}} />
    </React.Fragment>
  )
}

export default App;
