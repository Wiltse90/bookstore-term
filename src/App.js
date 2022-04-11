
import './App.css';
import React, {useCallback, useState} from 'react';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Overlay from './components/overlay/Overlay';

function App() {
  
  const callback = useCallback((props) => {
    setAds();
    console.log("Apps.js:Exit Overlay Button Click");
    }, []);
    const [ads, setAds] = useState(<Overlay parentCallBack={callback}/>);
  
  return (
    
    <div className="App">
      {ads};
      <Header />
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
