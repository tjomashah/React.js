import React from "react";

function Prop({ name, serie, color }) {
  return (
    <>
      <h2>Car</h2>
      <div>
        <p>{name}</p>
        <p>{serie}</p>
        <p>{color}</p>
      </div>
    </>
  );
}

export default Prop;
