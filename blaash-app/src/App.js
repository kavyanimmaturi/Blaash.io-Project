import { Component } from "react-dom";
import './App.css';
import MenuRoute from "./components/MenuRoute";
import SideSlider from './components/SideSlider';
class App extends Component{
    render(){

    
    return (
        <div className='home-container'>
         <div className="side-bar">
            <MenuRoute/>
        </div>
        <div className='main-container'>
            <h1>Product Playlist</h1>
            <div className='product-playlist-container'> 
            </div>
        </div>
        <div className='side-slider-cont'>
            <SideSlider/>
        </div>
        </div>
    )
}
}
 

export default App;



 

