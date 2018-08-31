import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Hello, world!</h1>
    <p>Welcome to ASP NET Core Google Sheet reader application with ReactJs!</p>
    <p>Navigate to 'Fetch Presidents' to see the data!</p>
  </div>
);

export default connect()(Home);
