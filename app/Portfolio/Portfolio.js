import React from 'react';
import moment from 'moment';
import RolesChart from '../RolesChart/';
import Calendar from '../Calendar/';
import Skills from '../Skills/';
import ProjectList from '../ProjectList/';
import SideChart from '../SideChart/';
import {monthsToHuman} from '../helpers';
import {roles, sides, ignoreSkills} from '../settings';
import RemoteTime from '../RemoteTime';

class Portfolio extends React.Component {

  constructor(props) {
    super();
    this.setActive = this.setActive.bind(this);
    let id = 1;
    this.state = {};
    this.state.projects = props.projects.map(p => {
      p.skills = p.skills.filter(skill => ignoreSkills.indexOf(skill) < 0);
      p.id = id++;
      p.start = moment(p.start);
      p.end = p.end ? moment(p.end) : moment().startOf('month');
      p.duration = p.end.diff(p.start, 'months');
      p.durationHuman = monthsToHuman(p.duration);
      p.roleLabel = roles.find(role => p.role.toLowerCase().indexOf(role) >= 0);
      p.side = p.side || 'other';
      return p;
    });
    this.state.calendar = this.calculateCalendar();
    this.state.active = {};
  }

  setActive(active) {
    this.setState({active: active});
  }

  calculateCalendar() {
    var calendar = {};
    this.state.projects.forEach(project => {
      let date = project.start.clone();
      let info = {
        role: project.roleLabel,
        side: project.side,
        skills: project.skills,
        remote: project.remote };
      while (date < project.end) {
        let year = date.year();
        let month = date.month();
        calendar[year] = calendar[year] || [];
        calendar[year][month] = this.calendarMerge(info, calendar[year][month]);
        date = date.add(1, 'month');
      }
    });
    return calendar;
  }

  // set role, side and skills for overlapping projects
  calendarMerge(a, b) {
    if(!a) {
      return b;
    }
    if(!b) {
      return a;
    }
    return {
      role: roles.find(role => role == a.role || role == b.role),
      side: sides.find(side => side == a.side || side == b.side),
      skills: Array.from(new Set(a.skills.concat(b.skills))),
      remote: a.remote || b.remote
    };
  }

  render() {
    return (
      <div>
        <section className='row photo'>
          <div className='col-sm-4 col-sm-offset-4'>
            <img src='assets/images/photo.jpg' />

          </div>
          <div className='col-sm-4 fluid'>
            <h1>Maciej Kasprzyk</h1>
            <p>
              Fullstack web developer<br/>
              Ten years of experience<br/>
              Open source contributor
            </p>
          </div>
        </section>

        <section className='row projects'>
          <div className='col-sm-8'>
            <h1>
              {this.state.active.project
                ? [this.state.active.project.company, this.state.active.project.name].filter(e => e)[0]
                : 'Projects'} &nbsp;
            </h1>
            <Calendar
              projects={this.state.projects}
              setActive={this.setActive}
              active={this.state.active}
              name='calendar2' />
          </div>

          <div className='col-sm-4 fluid'>
            <h1 className='pull-left skills-label'>Skills</h1>
            <Skills
              projects={this.state.projects}
              calendar={this.state.calendar}
              setActive={this.setActive}
              active={this.state.active} />
          </div>
        </section>

        <section className='row summaries'>
          <div className='col-xs-12 col-sm-6 col-md-4'>
            <RolesChart
              calendar={this.state.calendar}
              setActive={this.setActive}
              active={this.state.active} />
          </div>

          <div className='hidden-xs col-sm-6 col-md-4'>
            <SideChart
              calendar={this.state.calendar}
              setActive={this.setActive}
              active={this.state.active}
              />
          </div>

          <div className='hidden-xs hidden-sm col-md-4'>
            Remote for <RemoteTime calendar={this.state.calendar} setActive={this.setActive} />.
          </div>
        </section>

        <section className='row text-center'>
          <p>Open Source activity <a target="_blank" href="https://github.com/search?l=&o=desc&q=author%3Alokson&ref=advsearch&s=created&type=Issues">here</a></p>
        </section>

        <section className='row text-center'>
          <h1>Have a remote job offer?</h1>
          maciej.kasprzyk.it@gmail.com
        </section>

        <section className='row'>
          <ProjectList
            setActive={this.setActive}
            active={this.state.active}
            projects={this.state.projects} />
        </section>
      </div>
    );
  }

}

Portfolio.propTypes = {
  projects: React.PropTypes.array
};

export default Portfolio;
