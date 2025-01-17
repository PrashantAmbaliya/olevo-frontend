import React from "react";

interface Props {
  imageUrl: string;
}

const analyzeImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <>
      <div>
        <img src={imageUrl} alt="Product Image" />
      </div>
    </>
  )
}

export default analyzeImage