import React from "react";

import "./chart.css";

function chart(props) {
  return (
    <div className="box" id="today_visi">
      <div className="data">
        <p className="data_day">today's visitors</p>
        <p className="data_numb">24,599</p>
      </div>
      <div className="chart">
        <div className="box_column">
          <p className="content">mon</p>
          <div className="column">
            <p className="non_percent" />
            <p className="percent mon_color" />
          </div>
        </div>
        <div className="box_column">
          <p className="content">tue</p>
          <div className="column">
            <p className="non_percent tue_non" />
            <p className="percent tue_color" />
          </div>
        </div>
        <div className="box_column">
          <p className="content">web</p>
          <div className="column">
            <p className="non_percent web_non" />
            <p className="percent web_color" />
          </div>
        </div>
        <div className="box_column">
          <p className="content">thu</p>
          <div className="column">
            <p className="non_percent thu_non" />
            <p className="percent thu_color" />
          </div>
        </div>
        <div className="box_column">
          <p className="content">fri</p>
          <div className="column">
            <p className="non_percent fri_non" />
            <p className="percent fri_color" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default chart;
