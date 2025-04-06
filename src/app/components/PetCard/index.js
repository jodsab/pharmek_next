import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import pet from "./assets/pet.png";

import "./styles.scss";

const PetCard = () => {
  return (
    <div className="pet_card_container">
      <div className="pet_top">
        <Image
          className="pet_img"
          width={200}
          height={200}
          src={pet}
          alt="pet_image"
        />
        <button className="heart">
          <CiHeart />
        </button>
      </div>
      <div className="pet_bottom">
        <div className="pet_info">
          <p className="name">Lucas</p>
          <p className="raze">Yorkshire Terrier</p>
        </div>
        <button className="conocelo rounded-lg py-1 px-3">
          <p>Conócelo</p>
        </button>
      </div>
    </div>
  );
};

export default PetCard;
