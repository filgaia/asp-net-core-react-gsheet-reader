import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions/presidentsActions';

class FetchData extends Component {
  constructor(props) {
    super(props);

    this.state = { asc: true };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    // This method runs when the component is first added to the page
    this.props.requestPresidents();
  }

  handleClick() {
    this.props.requestPresidentsOrdered(this.state.asc);
    this.setState({ asc: !this.state.asc });
  }

  renderPresidents(presidents) {
    return presidents ? (
      <tbody>
        {presidents.map(president =>
          <tr key={president.id}>
            <td>{president.name}</td>
          </tr>
        )}
      </tbody>
    ) : (
        <div>Loading...</div>
      );
  }

  renderForecastsTable(props) {
    const presidents = this.renderPresidents(props.presidents);

    return (
      <table className='table'>
        <thead>
          <tr>
            <th>
              President
              <button className='btn btn-default pull-right' onClick={this.handleClick}>
                Toggle Order
              </button>
            </th>
          </tr>
        </thead>
        {presidents}
      </table>
    );
  }

  render() {
    return (
      <div>
        <h1>US Presidents List</h1>
        {this.renderForecastsTable(this.props)}
      </div>
    );
  }
}

export default connect(
  state => state.Presidents,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
