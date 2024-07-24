import styled from "styled-components";
import {useState} from "react";

const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
      border-color: #ccc;
    ` : `
      border-color: transparent;
    `}
    height: 40px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
  `;

export default function ProductImages({images}) {
  const [activeImage,setActiveImage] = useState(images?.[0]);
  const [activeImage1,setActiveImage1] = useState(images?.[1]);
  const [activeImage2,setActiveImage2] = useState(images?.[2]);
  return (
    <>
      <div className="flex flex-row items-center">
        <img src={activeImage} className="max-h-96 max-w-[50%]" />
        <img src={activeImage1} className="max-h-96 max-w-[50%]" />
        <img src={activeImage2} className="max-h-96 max-w-[50%]" />
      </div>
    </>
  );
}