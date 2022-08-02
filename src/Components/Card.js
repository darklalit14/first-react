import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>
        {data?.desc}
        {/* ? is for conditional rendering */}
      </p>
    </div>
  );
};

export default Card;
