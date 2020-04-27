import React, { Component } from 'react';
import './view4.css';
import LineChart from '../../charts/LineChart';

export default class View4 extends Component {
  render() {
    const { user } = this.props,
      width = 900,
      height = 250;
    return (
      <div id="view4" className="pane">
        <h2>User Acivities</h2>
        <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
          <LineChart data={user} width={width} height={height} />
        </div>
      </div>
    );
  }
}
