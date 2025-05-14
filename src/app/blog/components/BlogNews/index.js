import React from "react";
import { CiCalendar } from "react-icons/ci";

import "./styles.scss";

const BlogNews = () => {
  return (
    <div className="blogcard_containers">
      <div className="blogcard_buttons">
        <button className="active">
          <h4>Noticia destacada</h4>
        </button>
        <button className="inactive">
          <h4>Más noticias</h4>
        </button>
      </div>
      <div className="blog_card_container">
        <div className="blog_top">
          <h2 className="tittle">Lorem ipsum dolor sit</h2>
          <div className="date">
            <CiCalendar size={27} />
            <p>10/03/2024</p>
          </div>
        </div>
        <div className="blog_mid">
          <p>
            Lorem ipsum dolor sit amet consectetur. Non viverra malesuada
            facilisi quis tristique fringilla accumsan. Non id erat vitae
            tincidunt odio. Tristique auctor nibh eget non commodo velit id
            posuere pellentesque. Laoreet ornare molestie viverra vitae.{" "}
          </p>
        </div>
        <div className="blog_bot">
          <button>
            <p>Saber más</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
