import React, { Component } from 'react';

export default class Layout extends Component {
  componentDidMount () {
    
  }

  render() {
    return <div className="layout">{this.props.children}</div>;
  }
}