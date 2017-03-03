import React from 'react';
import moment from 'moment';
import {TimelineChart} from '.';

class Calendar extends React.Component {

  constructor() {
    super();
    this.state = {
      buckets: []
    };
  }

  componentDidMount() {
    this.calculate();
  }

  calculate() {
    // set range of years
    const minDate = moment(Math.min(...this.props.projects.map(p => p.start)));
    const maxDate = moment().add(1, 'year').startOf('year');

    // create bucket per each timeline
    let buckets = [];
    const bucketCount = 1 + this.bucketIndex(minDate.year());
    for(let i = 0; i < bucketCount; i++) {
      buckets.push({
        id: i,
        data: [],
        end: maxDate.clone().subtract(2 * i, 'years'),
        start: maxDate.clone().subtract(2 + 2 * i, 'years')
      });
    }

    // populate buckets
    this.props.projects.forEach(p => {
      this.populateBuckets(p, buckets);
    });
    this.setState({buckets});
  }

  bucketIndex(year) {
    return Math.floor((moment().year() - year) / 2);
  }

  populateBuckets(project, buckets) {
    let data = {start: project.start, end: project.end};
    while (data.start < data.end) {
      let bucket = buckets[this.bucketIndex(data.start.year())];
      bucket.data.push({
        project: project,
        start: data.start,
        end: moment.min(data.end, bucket.end)
      });
      data.start = bucket.end;
    }
  }

  render() {
    return (
      <div>
        {this.state.buckets.map(bucket =>
          <TimelineChart
            key={bucket.id}
            id={bucket.id}
            data={bucket.data}
            start={bucket.start}
            end={bucket.end.subtract(1, 'day')}
            setActive={this.props.setActive}
            active={this.props.active}
          />
        )}
      </div>
    );
  }

}

Calendar.propTypes = {
  projects: React.PropTypes.array,
  setActive: React.PropTypes.func,
  active: React.PropTypes.object
};

export default Calendar;
