import React from 'react';

class AllSkills extends React.Component {
  render() {
    return (
      <div>
        {this.props.skills.map(skill =>
          <span
            onMouseEnter = {() => this.props.setActive({skill: skill.name})}
            onMouseLeave = {() => this.props.setActive()}
            key={skill.name}>{skill.name} </span>
        )}
      </div>
    );
  }
}

AllSkills.propTypes = {
  setActive: React.PropTypes.func,
  active: React.PropTypes.object,
  skills: React.PropTypes.array
};

export default AllSkills;
