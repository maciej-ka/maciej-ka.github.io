import React from 'react';
import {monthsToHuman} from '../helpers';

class SkillsImportant extends React.Component {

  constructor(props) {
    super();
    this.state = {
      data: this.calculate(props.skills)
    };
  }

  calculate(skills) {
    const important = [
      'Rails',
      'JavaScript',
      'PHP',
      'CSS',
      'Java',
      'Angular',
      'React',
      'SQL'
    ];
    return skills.filter(skill => important.indexOf(skill.name) >= 0);
  }

  render() {
    return (
      <div>
        {this.state.data.map(s =>
          <div key={s.name}>
            <span className="title">{s.name}</span>
            <br />
            <span className="subtitle">{monthsToHuman(s.duration)}</span>
          </div>
        )}
      </div>
    );
  }

}

SkillsImportant.propTypes = {
  skills: React.PropTypes.array
};

export default SkillsImportant;
