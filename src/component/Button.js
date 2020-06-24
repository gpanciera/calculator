import React from "react";
// import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  // static propTypes = {
  //   name: PropTypes.string,
  //   orange: PropTypes.bool,
  //   wide: PropTypes.bool,
  //   clickHandler: PropTypes.func,
  // };

  handleClick = () => {
    this.setState(state => {
      return {clickCount: state.clickCount + 1}; 
    })
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}
          <div className='countText'>clicks:{this.state.clickCount}</div>
        </button>
      </div>
    );
  }
}
