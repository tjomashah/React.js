import React from "react";
import data from "./data";
import Prop from "./props";

function App() {
  return (
    <>
      <div>
        <h1>Cars</h1>
        {data.map((car) => (
          <Prop
            key={car.name}
            name={car.name}
            serie={car.serie}
            color={car.color}
          />
        ))}
      </div>
    </>
  );
}
export default App;
