import React from "react";
import "fontsource-merriweather";
import "normalize.css";
import Landing from '../sections/Landing/Landing';
import Project from '../sections/Projects/Project';

export default function Home() {
  return (
    <main>
      <Landing />
      <Project />
    </main>
  )
}