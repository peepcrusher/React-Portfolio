import React from "react";
import SkillCard from "./components/skillcard";
import Section from './components/section';
import SectionTitle from "./components/sectionTitle";
import ScrollButton from './components/scrollButton';


function App() {
  return (
    <div>
      <Section
      name="blue">
        <SectionTitle
        title="Sam Thompson" />
        <ScrollButton
        text="About Me"
        classes="title-btn" />
      </Section>
      <Section>
        <SectionTitle
        title="about-me" />
        <ScrollButton
        text="My Skills"
        classes="skills-btn" />
      </Section>
      <Section
      name="red">
      <div className="row">
        <SkillCard />
      </div>
      <ScrollButton
      text="Next" />
      </Section>
    </div>
  );
}

export default App;
