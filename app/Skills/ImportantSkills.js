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
      <div>
        {this.state.skills.map(skill =>
          <div
            onMouseEnter = {() => this.props.setActive({skill: skill.name})}
            onMouseLeave = {() => this.props.setActive()}
            key={skill.name}>
            <span className="title">{skill.name}</span>
            <div className="bar" style={{height: '1em', width: `${100 * skill.duration / this.state.max}%`}}></div>
            <span className="subtitle">{skill.durationHuman}</span>
            <br />
            <span className="subtitle">{skill.agoHuman}</span>
          </div>
        )}
      </div>
    );
  }

}

ImportantSkills.propTypes = {
  setActive: React.PropTypes.func,
  active: React.PropTypes.object,
  skills: React.PropTypes.array
};

export default ImportantSkills;
