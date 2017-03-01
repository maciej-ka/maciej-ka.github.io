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
        {this.state.skills.map(s =>
          <div key={s.name}>
            <span className="title">{s.name}</span>
            <div className="bar" style={{height: '1em', width: `${100 * s.duration / this.state.max}%`}}></div>
            <span className="subtitle">{s.durationHuman}</span>
            <br />
            <span className="subtitle">{s.agoHuman}</span>
          </div>
        )}
      </div>
    );
  }

}

ImportantSkills.propTypes = {
  skills: React.PropTypes.array
};

export default ImportantSkills;
