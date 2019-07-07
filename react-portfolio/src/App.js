import React from "react";
import SkillCard from "./components/skillcard";
import Section from './components/section';

function App() {
  return (
    <div>
      <Section
      name="blue">
      <div className="row">
        <SkillCard />
      </div>
      </Section>
    </div>
  );
}

export default App;
