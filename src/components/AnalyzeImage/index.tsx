import React from "react";

interface Props {
  imageUrl: string;
}

const analyzeImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <>
      <div className="aspect-[1/1] max-w-[500px] rounded-lg border-2 border-gray-300 object-cover">
        <img src={imageUrl} alt="Product Image" />
      </div>
    </>
  )
}

export default analyzeImage