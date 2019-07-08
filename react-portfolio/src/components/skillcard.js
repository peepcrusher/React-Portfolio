import React, {Component} from "react";
import ReactDOM from 'react-dom'

var flipped = false;

function flipCard() {
  if (!flipped) {
    flipped = true;
  } else {
    flipped = false;
  }
}

class SkillCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            flipped: false,
        };
    

        flipCard = () => {
            if(this.state.flipped){
                this.setState({flipped: false})
            }
            else{
                this.setState({flipped:true})
            }
            
        }
        
    }
    
    
render(){
  if (this.state.flipped) {
    return (
        <div className="card skillCard">
          <div className="card-content">
            <span className="card-title">Projects using</span>
            <ol>
              <li>thing1</li>
              <li>Thing2</li>
              <li>Thing3</li>
            </ol>
            <button onClick={flipCard} className="button">
              Back
            </button>
          </div>
        </div>
    );
  } else {
    return (
        <div className="card skillCard">
          <div className="card-content">
            <div className="sideOne">
              <span className="card-title">Javascript!</span>

              <button onClick={flipCard} className="button">
                 Projects
              </button>
            </div>
          </div>
        </div>
    );
  }
}
}
export default SkillCard;
