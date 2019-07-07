import React from "react";
import SkillCard from "./components/skillcard";
import Section from './components/section';
import SectionTitle from "./components/sectionTitle";

function App() {
  return (
    <div>
      <Section
      name="blue">
        <SectionTitle
        title="Sam Thompson" />
      </Section>
      <Section
      name="red">
      <div className="row">
        <SkillCard />
      </div>
      </Section>
    </div>
  );
}

export default App;
