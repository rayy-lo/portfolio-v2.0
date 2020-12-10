import React from "react";
import "fontsource-merriweather";
import "normalize.css";
import Landing from '../sections/Landing/Landing';
import Project from '../sections/Projects/Project';
import Footer from '../sections/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Landing />
      <Project />
      <Footer />
    </main>
  )
}