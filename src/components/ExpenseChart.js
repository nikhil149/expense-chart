import React, { useState } from "react";
import "./expenseChart.css";
import data from "../util/data.json";

const ExpenseChart = () => {
  const amount = data.map((value) => value.amount);
  const [totalAmount] = useState(amount.reduce((a, b) => a + b, 0));

  console.log(amount);
  return (
    <div className="expenseChart">
      <div className="expenseChart_topContainer">
        <div className="expenseChart_topContainer__balance">
          <h1 className="expenseChart_topContainer__h1">My Balance</h1>
          <h3 className="expenseChart_topContainer__h3">$921.48</h3>
        </div>
        <div></div>
      </div>
      <div className="expenseChart_bottomContainer">
        <h1 className="expenseChart_bottomContainer__h1">
          Spending - Last 7 days
        </h1>
        <div className="expenseChart_bottomContainer_chart">
          {data.map((value) => (
            <div
              key={value}
              className="expenseChart_bottomContainer_chart_barContainer"
            >
              <div
                className={
                  Math.max(...amount) === value.amount
                    ? "expenseChart_bottomContainer_chart_bar_max"
                    : "expenseChart_bottomContainer_chart_bar"
                }
                style={{
                  width: "30px",
                  height: `${Math.round((value.amount / totalAmount) * 300)}%`,
                }}
              ></div>
              <span>{value.day}</span>
            </div>
          ))}
        </div>
        <hr style={{ margin: 0 }} />
        <div className="expenseChart_bottomContainer__lastDiv">
          <div className="expenseChart_bottomContainer__monthCntainer">
            <span>Total this month</span>
            <h1 className="expenseChart_bottomContainer__lastDiv_h">$478.33</h1>
          </div>
          <div className="expenseChart_bottomContainer__monthCntainer">
            <h6 className="expenseChart_bottomContainer__lastDiv_h">+2.4%</h6>
            <span>From last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;
