import React from 'react';
import {monthsToHuman} from '../helpers';

class SkillsChart extends React.Component {

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
            {s.name}
            <br />
            {monthsToHuman(s.duration)}
          </div>
        )}
      </div>
    );
  }

}

SkillsChart.propTypes = {
  skills: React.PropTypes.array
};

export default SkillsChart;
