import React from 'react';
import {importantSkills} from '../settings';

class ImportantSkills extends React.Component {

  constructor(props) {
    super();
    const skills = this.calculate(props);
    this.state = {
      skills: skills,
      max: Math.max(...skills.map(s => s.duration))
    };
  }

  calculate(props) {
    return props.skills.filter(skill => importantSkills.indexOf(skill.name) >= 0);
  }

  componentWillReceiveProps(props) {
    this.setState({skills: this.calculate(props)});
  }

  render() {
    return (
      <div className='important-skills fluid-container'>
        {this.state.skills.map(skill =>
          <div
            onMouseEnter = {() => this.props.setActive({skill: skill.name})}
            onMouseLeave = {() => this.props.setActive({})}
            className = {'row ' + (this.isActive(skill) ? 'active' : '')}
            key={skill.name}>
            <div className='col-xs-6 col-lg-4'>
              <div className='title'>{skill.name}</div>
              <span className='ago subtitle'>{skill.agoHuman}</span>
            </div>
            <div className='col-xs-6 col-lg-8'>
              <div className='bar' style={{width: `${100 * skill.duration / this.state.max}%`}}></div>
              <span className='subtitle'>{skill.durationHuman}</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  isActive(skill) {
    let active = this.props.active;
    if (!active) {
      return;
    }
    if (active.project) {
      return active.project.skills.indexOf(skill.name) >= 0;
    }
    if (active.skill) {
      return active.skill == skill.name;
    }
  }

}

ImportantSkills.propTypes = {
  setActive: React.PropTypes.func,
  active: React.PropTypes.object,
  skills: React.PropTypes.array
};

export default ImportantSkills;
