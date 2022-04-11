import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Products from './data.json';

class Deals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: Products}
    }
    componentWillUnmount() {
        console.log("Deals.js:Deals Unmounted");
      }
 render(){

    const getData = () => {
        const db = [];

        this.state.data.map((product) => {
            if(product.department == "Books"){
                db.push(product.image);
            }
        });

        return db;
    } 

    const products = getData();

  return (
    <Carousel className='deals'>
        {products.map(name => <div><img src={name}></img></div>)}
    </Carousel>
  )
    }
}

export default Deals