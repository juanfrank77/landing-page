import React from "react";
import "./CopySection.scss";

function CopySection(props) {
  return (
    <div className="CopySection container">
      <div className="box has-text-justified">
        <h2 className="CopySection__title title has-text-weight-bold has-text-centered">
          What's this all about?
        </h2>
        <div className="content">
          <p>Look, things are moving pretty fast.</p>

          <p>
            You have seen it, we all have. Feels like every 6 months something
            new comes up or gets a major update.
          </p>

          <p>
            But not just in web dev, technology in general. The pace gets faster
            and faster. Moore's law is not treating us nicely.{" "}
          </p>
          <p>
            It also doesn't help that we are one of the most distracted
            generations ever. The shiny new thing and FOMO are real.{" "}
          </p>
          <p>
            We now have to take time out of work for learning things and being
            up to date and practice our already acquired skills.{" "}
          </p>
          <p>
            But since not everything is code and work, some also want to have
            time for hobbies, personal projects, our family and friends, etc...{" "}
          </p>
          <p>
            That sounds all good in paper but in practice several of us are
            overworked, overwhelmed, and close to burnout.{" "}
          </p>
          <p>
            At first we think is not too much of a problem. "work hard",
            "hustle", is some of the things we hear over and over again which we
            now associate with success and achievement.{" "}
          </p>
          <p>
            But is it really though? Is "work-life balance" even real? Is there
            a way to not sacrifice one for the other?
          </p>
          <p>
            Some people just lower their standards and think "that's just the
            way it is." Others go and do as much as they can without a plan.{" "}
          </p>
          <p>
            But there's an alternative to that. We don't have to sacrifice one
            part of our lives for the other, at least not indefinitely.
          </p>
          <p>And that's what this is about.</p>
        </div>
      </div>
    </div>
  );
}

export default CopySection;
