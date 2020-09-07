import React, { Component } from "react";
import PropTypes from "prop-types";
import Statistics from "./components/statistics/statistics";
import FeedBackOptions from "./components/feedbackOptions/FeedbackOptions";
import Notification from "./components/notification/Notification";
import SectionTitle from "./components/sectionTitle/sectionTitle";


class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0,
};


leaveFeedback = evt => {
  const name = evt.target.name;
  this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
};
 countTotalFeedback = () => {
  const total = this.state.good + this.state.neutral + this.state.bad;
  return total;
}
  positivePercentage = () => {
  
   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  
}

  render() {
    return (
      <>
        <SectionTitle>
          <FeedBackOptions options={this.leaveFeedback}/>
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={
              this.countTotalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        ) : (<Notification message="No feedback given" />)
        }
        </SectionTitle>
        
        </>
    )
  }
}

export default App;
