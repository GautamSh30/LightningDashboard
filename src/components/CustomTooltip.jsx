import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ color: "#333", fontSize: "30px" }}>
        {payload[0].value}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
