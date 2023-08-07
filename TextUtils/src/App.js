import React from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  return (
     <>
     <Navbar title="TextUtils"/>
     <div className="container my-3">
     <TextForm heading="Enter the text to analyze"/>
     </div>
     {/* <About/> */}
     </>
  );
}

export default App;
