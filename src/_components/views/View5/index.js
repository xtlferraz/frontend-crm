import React, { Component } from 'react';
import BarChart from '../../charts/BarChart';
import './view5.css';

export default class View5 extends Component {
  render() {
    const { data } = this.props;
    return (
      <div id="view5" className="pane">
        <div>
          <BarChart data={data} width={700} height={300} />
        </div>
      </div>
    );
  }
}
