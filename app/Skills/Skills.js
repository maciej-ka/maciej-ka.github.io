import React from 'react';
import moment from 'moment';
import {monthsToHuman} from '../helpers';
import {ImportantSkills, AllSkills} from '.';

class Skills extends React.Component {

  constructor(props) {
    super();
    this.state = {
      skills: this.calculate(props.projects),
      show: 'important',
      order: 'duration'
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

    return this.sortSkills(skills, 'duration');
  }

  handleChangeShow(event) {
    this.setState({show: event.target.value});
  }

  handleChangeOrder(event) {
    this.setState({order: event.target.value});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.order != this.state.order) {
      this.setState({skills: this.sortSkills()});
    }
  }

  sortSkills(skills = this.state.skills, order = this.state.order) {
    if(order === 'duration') {
      return skills.sort((a,b) => b.duration - a.duration || a.ago - b.ago || a.name.localeCompare(b.name));
    }
    return skills.sort((a,b) => a.ago - b.ago || b.duration - a.duration || a.name.localeCompare(b.name));
  }

  render() {
    return (
      <div>
        show:
        <select value={this.state.show} onChange={(e) => this.handleChangeShow(e)}>
          <option value='important'>important</option>
          <option value='all'>all</option>
        </select>

        order:
        <select value={this.state.order} onChange={(e) => this.handleChangeOrder(e)}>
          <option value='duration'>experience</option>
          <option value='ago'>recently used</option>
        </select>

        {this.state.show === 'important'
          ? <ImportantSkills skills={this.state.skills} />
          : <AllSkills skills={this.state.skills} />
        }
      </div>
    );
  }

}

Skills.propTypes = {
  projects: React.PropTypes.array
};

export default Skills;
