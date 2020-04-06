import React, { Component } from "react";

import "./SettingClassNamesDynamically.css";

class SettingClassNamesDynamically extends Component {
  state = {
    myCount: 3
  };

  render() {
    const classes = [];

    if (this.state.myCount === 1) {
      classes.push("red");
    } else if (this.state.myCount === 2) {
      classes.push("red");

      classes.push("bold");
    } else if (this.state.myCount === 3) {
      classes.push("red");

      classes.push("bold");

      classes.push("backColor");
    }

    return (
      <div>
        <h1>Setting Class Names Dynamically</h1>

        <p className={classes.join(" ")}>
          Here is my test data, Based on count style will change
        </p>
      </div>
    );
  }
}

export default SettingClassNamesDynamically;
