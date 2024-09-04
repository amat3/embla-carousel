"use client";

import React from "react";
import Header from "./components/Header";
import { EmblaCarousel } from "./components/EmblaCarousel";
import Footer from "./components/Footer";

const slides = [1, 2, 3, 4, 5, 6, 7]; // Definir el numero de slides

export default function Home() {
  return (
    <>
      <Header />
      <EmblaCarousel slides={slides} />
      <Footer />
    </>
  );
}
