import React from 'react';
import moment from 'moment';
import RolesChart from '../RolesChart/';
import Calendar from '../Calendar/';
import Skills from '../Skills/';
import ProjectList from '../ProjectList/';
import SideChart from '../SideChart/';
import {monthsToHuman} from '../helpers';
import {roles, sides} from '../settings';

class Portfolio extends React.Component {

  constructor(props) {
    super();
    let id = 0;
    this.state = {};
    this.state.projects = props.projects.map(p => {
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
        <section className='row'>
          <div className='col-sm-4'>
            <h1>Maciej Kasprzyk</h1>
            maciej.kasprzyk.it@gmail.com
            <img width='200px' src='assets/images/photo.jpg' />
          </div>
        </section>

        <section className='row'>
          <div className='col-xs-12 col-sm-6 col-md-4'>
            <h1>Web developer</h1>
            <p>I write code and contribute to Open Source to see how big projects are made.</p>
            <RolesChart calendar={this.state.calendar} />
          </div>

          <div className='hidden-xs col-sm-6 col-md-4'>
            <h1>Fullstack</h1>
            <p>Due to possibilities in modern javascript I moved from the server side to fullstack.</p>
            <SideChart calendar={this.state.calendar} />
          </div>

          <div className='hidden-xs hidden-sm col-md-4'>
            <h1>Remote</h1>
            <p>I have experience in fully remote jobs.</p>
            <p>My office is a rented place near home. I stay reachable by a chat or video call. And I worked this way for the last 2 years and 7 months.</p>
          </div>
        </section>

        <section>
          <div className='col-sm-8'>
            <h1>Projects</h1>
            <Calendar projects={this.state.projects} />
          </div>

          <div className='col-sm-4'>
            <h1>Skills</h1>
            <Skills projects={this.state.projects} calendar={this.state.calendar} />
          </div>
        </section>

        <section className='row'>
          <p>View my Open Source activity <a href="https://github.com/search?l=&o=desc&q=author%3Alokson&ref=advsearch&s=created&type=Issues">here</a></p>
          <ProjectList projects={this.state.projects} />
        </section>

        <section>
          <img src='assets/images/footer.png' />
        </section>
      </div>
    );
  }

}

Portfolio.propTypes = {
  projects: React.PropTypes.array
};

export default Portfolio;
