import React from 'react';
import moment from 'moment';
import {monthsToHuman} from '../helpers';
import {ImportantSkills, AllSkills} from '.';

class Skills extends React.Component {

  constructor(props) {
    super();
    this.state = {
      skills: this.calculate(props),
      show: 'important',
      order: 'duration'
    };
  }

  calculate(props) {
    // count durations and last use
    let durations = {};
    let lastUsed = {};
    let calendar = props.calendar;
    for (let year in calendar) {
      for (let month in calendar[year]) {
        calendar[year][month].skills.forEach(skill => {
          durations[skill] = (durations[skill] || 0) + 1;
          lastUsed[skill] = [(lastUsed[skill] || '1990'), `${year}-${(parseInt(month) + 1).toString().padStart(2,0)}`].sort()[1];
          if(skill === 'JavaScript') {
            console.log([(lastUsed[skill] || '1990'), `${year}-${(parseInt(month) + 1).toString().padStart(2,0)}`].sort());
          }
        });
      }
    }

    // format data
    let skills = [];
    for (let name in durations) {
      let ago = moment().diff(new Date(lastUsed[name]), 'months') - 1;
      skills.push({
        name: name,
        ago: ago,
        agoHuman: ago == 0 ? 'currently using' : monthsToHuman(ago) + ' ago',
        duration: durations[name],
        durationHuman: monthsToHuman(durations[name])
      });
    }
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
    return order === 'duration'
      ? skills.sort((a,b) => b.duration - a.duration || a.ago - b.ago || a.name.localeCompare(b.name))
      : skills.sort((a,b) => a.ago - b.ago || b.duration - a.duration || a.name.localeCompare(b.name));
  }

  render() {
    return (
      <div>

        <div className='row skills-filter-form'>
          <div className='col-xs-6 col-xs-offset-6 col-md-offset-4 col-md-6'>
            show:
            <select value={this.state.show} onChange={(e) => this.handleChangeShow(e)}>
              <option value='important'>important</option>
              <option value='all'>all</option>
            </select><br/>

            order:
            <select value={this.state.order} onChange={(e) => this.handleChangeOrder(e)}>
              <option value='duration'>experience</option>
              <option value='ago'>recently used</option>
            </select>
          </div>
        </div>

        {this.state.show === 'important'
          ? <ImportantSkills
              setActive = {this.props.setActive}
              active = {this.props.active}
              skills = {this.state.skills} />
          : <AllSkills
              setActive = {this.props.setActive}
              active = {this.props.active}
              skills = {this.state.skills} />
        }
      </div>
    );
  }

}

Skills.propTypes = {
  calendar: React.PropTypes.object,
  setActive: React.PropTypes.func,
  active: React.PropTypes.object
};

export default Skills;
