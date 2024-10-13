import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

import postBlog from "./assets/postBlog.jpeg";

import "./styles.scss";
import MasNoticias from "./components/masNoticias";

const ICONS_SIZE = 25;

const PostBLog = () => {
  return (
    <div className="postBlog_container">
      <p className="title">
        ¡MANTÉN SALUDABLE A TUS MASCOTAS CON ESTOS CONSEJOS!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur. Nunc arcu consectetur donec
        faucibus tempor amet convallis viverra tristique. Curabitur non lectus
        lacus posuere mi id. Ridiculus sit ac tristique leo non odio id varius.
        Lobortis viverra elementum quam diam aliquam.
      </p>
      <div className="visit_us">
        <div>
          <div className="visitanos">
            <p className="here">Visitanos aquí:</p>
            <div className="buttons">
              <button>
                <FaFacebook size={ICONS_SIZE} />
              </button>
              <button>
                <FaInstagram size={ICONS_SIZE} />
              </button>
              <button>
                <FaTiktok size={ICONS_SIZE} />
              </button>
              <button>
                <FaWhatsapp size={ICONS_SIZE} />
              </button>
              <button>
                <FaYoutube size={ICONS_SIZE} />
              </button>
            </div>
          </div>
          <Image src={postBlog} alt="portada del post blog" />
          <hr />
          <div className="person_picture">
            <div className="image_person"></div>
            <p className="person_name">Zagala Hernandez Carlos</p>
          </div>
        </div>
        <div>
          <MasNoticias />
        </div>
      </div>
      <hr />
      <h2>
        Lorem ipsum dolor sit amet consectetur. At consequat sed rutrum libero
        purus. Pulvinar eu turpis habitant tellus euismod.
      </h2>
      <Image src={postBlog} alt="portada del post blog" />
      <p>
        Lorem ipsum dolor sit amet consectetur. Leo non leo lorem molestie amet.
        Nisl nec curabitur pretium facilisi turpis ut tempus morbi. Faucibus
        vitae volutpat pellentesque tincidunt mattis vulputate vitae nisl.
        Ultrices faucibus pellentesque at ac facilisis. Urna molestie eu a ut
        cursus. Volutpat dapibus a rhoncus malesuada accumsan. Cursus non tellus
        feugiat enim ultrices pellentesque iaculis urna. Habitant a pretium
        cursus bibendum. Dolor volutpat dignissim faucibus non est duis.
        Ultricies gravida blandit nulla dignissim. In iaculis tortor lobortis
        praesent lorem commodo dis convallis placerat.
      </p>
    </div>
  );
};

export default PostBLog;
