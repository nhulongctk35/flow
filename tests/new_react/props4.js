// @flow

import React from "react";
import ReactDOM from "react-dom";

class JDiv extends React.Component {
  // static defaultProps: { };
  props: {
    id: string
  };
}

// Should be a type error ('id' takes a string, not a number..)
<JDiv id={42} />;

class Example extends React.Component {
  props: { bar: string };

  render() {
    return <div>{this.props.bar}</div>
  }
}

ReactDOM.render(
  <Example foo="foo" />,
  document.body
);
