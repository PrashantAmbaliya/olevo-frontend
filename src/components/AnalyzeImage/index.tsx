import React, { us } from "react";

interface analyzeImageProps {
  imageUrl: boolean;
}

const analyzeImage: React.FC<analyzeImageProps> = ({ imageUrl }) => {
  return (
    <>
      <div>
        <img src="imageUrl" alt="Product Image" />
      </div>
    </>
  )
}

export default analyzeImage