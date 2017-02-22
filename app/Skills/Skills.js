import React from 'react';
import {monthsToHuman} from '../helpers';
import {SkillsImportant} from '.';

class Skills extends React.Component {

  constructor(props) {
    super();
    this.state = {
      skills: this.calculate(props.projects)
    };
  }

  calculate(projects) {
    let skills = [];

    // count durations and ago
    projects.forEach(project => {
      project.skills.forEach(name => {
        let skill = skills.find(s => s.name == name);
        if(!skill) {
          skill = {name: name, duration: 0};
          skills.push(skill);
        }
        skill.duration += project.duration;
      });
    });

    // humanize time
    skills.forEach(skill => {
      skill.durationHuman = monthsToHuman(skill.duration);
    });

    return skills.sort((a,b) => b.duration - a.duration);
  }

  render() {
    return (
      <SkillsImportant skills={this.state.skills} />
    );
  }

}

Skills.propTypes = {
  projects: React.PropTypes.array
};

export default Skills;
