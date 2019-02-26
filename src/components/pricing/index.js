import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom  from 'react-reveal/Zoom';

class Pricing extends Component {
    state={
        prices:[100,150,300],
        position:['Balcony','Medium','Star'],
        desc:[' what about presets hey you are at right place  interesting to have the building blocks needed to implement',
        'It interesting to have the building blocks needed to implement custom icons, but what about presets',
         'It is interesting to have the building blocks needed to implement custom icons, but what about presets'],
         linkto:['http://google.com','http://google.com','http://google.com'],
         delay:[500,0,500]
    }

     showBoxes=()=>(
        
       this.state.prices.map((box,i)=> (
        <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
         <div className="pricing_inner_wrapper">
         
         <div className="pricing_title">
         <span>${this.state.prices[i]}</span>
          <span> {this.state.position[i]}</span>
         </div>
          <div className="pricing_description">
          {this.state.desc[i]}
          </div>
          <div className="pricing_buttons">
          <MyButton
          text="Purchase"
          color="#fff"
          bck="#ffa800"
          link={this.state.linkto[i]}
          />
          
          </div>

         </div>
          
        </div>
        </Zoom>
       ))

     )



    render() {
        return (
            <div className="bck_black">
            <div className="center_wrapper pricing_section">
            
            <h2>Pricing</h2>
            <div className="pricing_wrapper">
              {this.showBoxes()}
            </div>
            </div>
                
            </div>
        );
    }
}

export default Pricing; 