import React from 'react';

class AllSkills extends React.Component {
  render() {
    return (
      <div className='allSkills'>
        {this.props.skills.map(skill =>
          <span
            onMouseEnter = {() => this.props.setActive({skill: skill.name})}
            onMouseLeave = {() => this.props.setActive({})}
            className = {`skillLabel ${this.isActive(skill) ? 'active' : ''}`}
            key={skill.name}>{skill.name} </span>
        )}
      </div>
    );
  }

  isActive(skill) {
    let active = this.props.active;
    if (!active) {
      return false;
    }
    if (active.skill) {
      return skill.name == active.skill;
    }
    if (active.project) {
      return active.project.skills.indexOf(skill.name) >= 0;
    }

  }


}

AllSkills.propTypes = {
  setActive: React.PropTypes.func,
  active: React.PropTypes.object,
  skills: React.PropTypes.array
};

export default AllSkills;
