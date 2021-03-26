import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function HeroSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="has-text-centered"
        />
        <div className="buttons is-centered p-4" />
      </div>
    </Section>
  );
}

export default HeroSection;
