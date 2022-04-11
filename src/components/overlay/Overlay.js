import React from "react";
import Deals from "../deals/Deals";
import './style.css';

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {deals: ""}
    }
    

    componentDidMount() {
      console.log("Overlay.js:Overlay Mounted");
      this.setState({
        deals: <Deals />
      });
      console.log("Overlay.js:Display Deals");
    }
    

    render() {
      return ( 
          <div>
              <div className="overlay" />
              <div className="deals">
              <button id="exitOverlay" onClick={() => {this.props.parentCallBack()}}>X</button>
                {this.state.deals}
              {console.log("Overlay.js:Render Overlay")}
              <h1 id="msgDeal">10% Off Sale!</h1>
              </div>
          </div>
          
      );
    }
  }

export default Overlay;