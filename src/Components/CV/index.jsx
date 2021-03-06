import React, { Component } from 'react';
import './style.scss';
// import $ from 'jquery';
import PartOne from '../PartOne/index';
import PartTwo from '../PartTwo/index';
import PartThree from '../PartThree/index';

class Cv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponentOne: false,
      showComponentTwo: false,
      showComponentThree: false,
    };
  }

  render() {
    return (
      <div>
        <div className="cv-button-options mobile">
          <button
            className="button-option"
            onClick={() => {
              this.setState({
                showComponentOne: !this.state.showComponentOne,
                showComponentTwo: false,
                showComponentThree: false,
              });
            }}
          >
            <p>No time at all (5s)</p>
          </button>
          {this.state.showComponentOne ? <PartOne /> : null}
          <button
            className="button-option"
            onClick={() => {
              this.setState({
                showComponentTwo: !this.state.showComponentTwo,
                showComponentOne: false,
                showComponentThree: false,
              });
            }}
          >
            <p>Just a minute! (60s)</p>
          </button>
          {this.state.showComponentTwo ? <PartTwo /> : null}
          <button
            className="button-option"
            onClick={() => {
              this.setState({
                showComponentThree: !this.state.showComponentThree,
                showComponentOne: false,
                showComponentTwo: false,
              });
            }}
          >
            <p>All freakin’ day (5min)</p>
          </button>
          {this.state.showComponentThree ? <PartThree /> : null}
        </div>

        <div>
          <div className="wrapper">
            <div className="cv-button-options desktop">
              <button
                className="button-option"
                onClick={() => {
                  this.setState({
                    showComponentOne: !this.state.showComponentOne,
                    showComponentTwo: false,
                    showComponentThree: false,
                  });
                }}
              >
                <p>No time at all (5s)</p>
              </button>
              <button
                className="button-option"
                onClick={() => {
                  this.setState({
                    showComponentTwo: !this.state.showComponentTwo,
                    showComponentOne: false,
                    showComponentThree: false,
                  });
                }}
              >
                <p>Just a minute! (60s)</p>
              </button>
              <button
                className="button-option"
                onClick={() => {
                  this.setState({
                    showComponentThree: !this.state.showComponentThree,
                    showComponentOne: false,
                    showComponentTwo: false,
                  });
                }}
              >
                <p>All freakin’ day (5min)</p>
              </button>
            </div>
          </div>
          <div className="desktop">
            {this.state.showComponentOne ? <PartOne /> : null}
            {this.state.showComponentTwo ? <PartTwo /> : null}
            {this.state.showComponentThree ? <PartThree /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Cv;
