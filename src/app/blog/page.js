"use client";
import { useEffect } from "react";
import Image from "next/image";
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";
import BlogNews from "./components/BlogNews";
import BlogCard from "../components/BlogCard";
import blogPortada from "./assets/blog-portada.png";
import SectionHeader from "@/components/SectionHeader";
import PetCard from "../components/PetCard";
import hogar from "./assets/hogar.png";
import "./styles.scss";

import Aos from "aos";
import "aos/dist/aos.css";
import PetList from "@/components/PetList";

export default function Blog() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className="blog_content">
      <WithNavbarAndFooter>
        <div className="blog_spaced">
          <div className="blog_portadas">
            <Image src={blogPortada} alt="portada del blog" />
            <div className="card_contents">
              <BlogNews />
            </div>
          </div>
          <div className="noticias content">
            <div className="blogs_list">
              {Array(3)
                .fill("")
                .map((item, index) => {
                  return <BlogCard key={index} />;
                })}
            </div>
            <div className="content">
              <h3>MÁS NOTICIAS</h3>
            </div>
            <div className="noticias_list content">
              {Array(3)
                .fill("")
                .map((item, index) => {
                  return <BlogCard key={index} />;
                })}
            </div>
          </div>

          <PetList />
        </div>
      </WithNavbarAndFooter>
    </main>
  );
}
