"use client";
import React from "react";
import {
  carouselone,
  carouselthree,
  carouseltwo,
  carouselfour,
  carouselfive,
  carouselsix,
} from "@/images/image";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Container from "./Container";
function Carusel() {
  return (
    <div className={"max-w-screen-xl mx-auto"}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <Image src={carouselone} alt="carousel one" />
        </div>
        <div>
          <Image src={carouseltwo} alt="carousel two" />
        </div>
        <div>
          <Image src={carouselthree} alt="carousel three" />
        </div>
        <div>
          <Image src={carouselfour} alt="carousel four" />
        </div>
        <div>
          <Image src={carouselfive} alt="carousel five" />
        </div>
        <div>
          <Image src={carouselsix} alt="carousel six" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carusel;
