import Button from "./Button";
import React from "react";
// import PropTypes from "prop-types";

import "./ButtonPanel.css";

const ButtonPanel = ({ handleClick }) => {

  return (
    <div className="component-button-panel">
      <div>
        <Button name="AC" handleClick={handleClick} />
        <Button name="+/-" handleClick={handleClick} />
        <Button name="%" handleClick={handleClick} />
        <Button name="÷" handleClick={handleClick} orange />
      </div>
      <div>
        <Button name="7" handleClick={handleClick} />
        <Button name="8" handleClick={handleClick} />
        <Button name="9" handleClick={handleClick} />
        <Button name="x" handleClick={handleClick} orange />
      </div>
      <div>
        <Button name="4" handleClick={handleClick} />
        <Button name="5" handleClick={handleClick} />
        <Button name="6" handleClick={handleClick} />
        <Button name="-" handleClick={handleClick} orange />
      </div>
      <div>
        <Button name="1" handleClick={handleClick} />
        <Button name="2" handleClick={handleClick} />
        <Button name="3" handleClick={handleClick} />
        <Button name="+" handleClick={handleClick} orange />
      </div>
      <div>
        <Button name="0" handleClick={handleClick} wide />
        <Button name="." handleClick={handleClick} />
        <Button name="=" handleClick={handleClick} orange />
      </div>
    </div>
  );
};

export default ButtonPanel;


// export default class ButtonPanel extends React.Component {
//   static propTypes = {
//     clickHandler: PropTypes.func,
//   };

//   handleClick = buttonName => {
//     this.props.handleClick(buttonName);
//   };

//   shouldComponentUpdate(nextProps, nextState) {
//     // console.log("ButtonPanel -> shouldComponentUpdate -> nextProps", nextProps)
//     // console.log("ButtonPanel -> shouldComponentUpdate -> nextState", nextState)
//     return true;
//   }

//   render() {
//     return (
//       <div className="component-button-panel">
//         <div>
//           <Button name="AC" clickHandler={this.handleClick} />
//           <Button name="+/-" clickHandler={this.handleClick} />
//           <Button name="%" clickHandler={this.handleClick} />
//           <Button name="÷" clickHandler={this.handleClick} orange />
//         </div>
//         <div>
//           <Button name="7" clickHandler={this.handleClick} />
//           <Button name="8" clickHandler={this.handleClick} />
//           <Button name="9" clickHandler={this.handleClick} />
//           <Button name="x" clickHandler={this.handleClick} orange />
//         </div>
//         <div>
//           <Button name="4" clickHandler={this.handleClick} />
//           <Button name="5" clickHandler={this.handleClick} />
//           <Button name="6" clickHandler={this.handleClick} />
//           <Button name="-" clickHandler={this.handleClick} orange />
//         </div>
//         <div>
//           <Button name="1" clickHandler={this.handleClick} />
//           <Button name="2" clickHandler={this.handleClick} />
//           <Button name="3" clickHandler={this.handleClick} />
//           <Button name="+" clickHandler={this.handleClick} orange />
//         </div>
//         <div>
//           <Button name="0" clickHandler={this.handleClick} wide />
//           <Button name="." clickHandler={this.handleClick} />
//           <Button name="=" clickHandler={this.handleClick} orange />
//         </div>
//       </div>
//     );
//   }
// }
