import React from "react";
// import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ name, handleClick, orange, wide } )=> {

  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
  ];
  // console.log("Button props: ", name, orange, wide);

  return (
    <div className={className.join(" ").trim()}>
      <button onClick={() => handleClick(name)}>{name}</button>
    </div>
  );
};

export default Button;



// export default class Button extends React.PureComponent {
//   static propTypes = {
//     name: PropTypes.string,
//     orange: PropTypes.bool,
//     wide: PropTypes.bool,
//     clickHandler: PropTypes.func,
//   };

//   handleClick = () => {
//     this.props.clickHandler(this.props.name);
//   };

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return(nextProps.name !== this.props.name); 
//   // }

//   render() {
//     const className = [
//       "component-button",
//       this.props.orange ? "orange" : "",
//       this.props.wide ? "wide" : "",
//     ];

//     return (
//       <div className={className.join(" ").trim()}>
//         <button onClick={this.handleClick}>{this.props.name}</button>
//       </div>
//     );
//   }
// }
