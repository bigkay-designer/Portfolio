import React from 'react';
import {motion} from 'framer-motion';
import ShowcaseProjects from '../components/home-components/ShowcaseProjects';
import HeroSection from '../components/home-components/HeroSection';
function Home() {
  return (
    <div className="">
      <HeroSection />
      <ShowcaseProjects />
    </div>
  );
}

export default Home;
