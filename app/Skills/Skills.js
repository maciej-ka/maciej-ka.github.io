import React from 'react';
import moment from 'moment';
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
        skill.ago = skill.ago
          ? moment.max(skill.ago, project.end)
          : project.end;
      });
    });

    // humanize time
    skills.forEach(skill => {
      skill.durationHuman = monthsToHuman(skill.duration);
      skill.ago = moment().diff(skill.ago, 'months');
      skill.agoHuman = skill.ago == 0
        ? 'currently using'
        : monthsToHuman(skill.ago) + ' ago';
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
