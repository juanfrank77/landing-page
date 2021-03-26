import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import "./FeaturesSection.scss";

function FeaturesSection(props) {
  const items = [
    {
      title: "A system",
      body: "of the core foundational habits and practices.",
      image: "/undraw_Timeline_re_aw6g.svg",
    },
    {
      title: "A roadmap",
      body: "of the skills that will give you the most leverage.",
      image: "/undraw_Map_dark_re_36sy.svg",
    },
    {
      title: "A toolset",
      body: "of science-based techniques to level up your performance.",
      image: "/undraw_Spreadsheet_re_cn18.svg",
    },
    {
      title: "A community",
      body: "of peers that are moving away from hustle, overwhelm and burnout.",
      image: "/undraw_Data_re_80ws.svg",
    },
  ];

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
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <div className="FeaturesSection__box box">
          <div className="FeaturesSection__columns columns is-multiline is-centered is-gapless">
            {items.map((item, index) => (
              <div
                className={
                  "FeaturesSection__column column" +
                  (props.columns === 1 ? " is-full" : "") +
                  (props.columns === 2 ? " is-half" : "") +
                  (props.columns === 3 ? " is-one-third" : "") +
                  (props.columns === 4 ? " is-one-quarter" : "")
                }
                key={index}
              >
                <div className="FeaturesSection__item has-text-centered">
                  <div className="FeaturesSection__image-container">
                    <figure className="FeaturesSection__image image is-4by3">
                      <img src={item.image} alt={item.title} />
                    </figure>
                  </div>
                  <h2 className="title is-4 is-spaced has-text-dark">
                    {item.title}
                  </h2>
                  <p className="subtitle is-6 has-text-dark">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
