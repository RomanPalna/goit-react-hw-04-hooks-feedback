import React, { useState } from "react";
import Statistics from "./Statistics";
import Notification from "./Notification";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good / countTotalFeedback()) * 100;

    if (isNaN(percentage)) {
      return 0;
    } else {
      return Math.round(percentage);
    }
  };

  const onLeaveFeedback = (e) => {
    const elem = e.target.name;

    switch (elem) {
      case "good":
        setGood(elem + 1);
        break;
      case "neutral":
        setNeutral(elem + 1);
        break;
      case "bad":
        setBad(elem + 1);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(bad, good, neutral)}
          onLeaveFeedback={onLeaveFeedback}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

// export default class Feedback extends Component {
//   static propTypes = {
//     //
//   };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countGoodFeed = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   countNeutralFeed = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   countBadFeed = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const percentage = (this.state.good / this.countTotalFeedback()) * 100;
//     if (isNaN(percentage)) {
//       return 0;
//     } else {
//       return Math.round(percentage);
//     }
//   };

//   onLeaveFeedback = e => {
//     const elem = e.target.name;
//     this.setState(prevState => ({
//       [elem]: prevState[elem] + 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="No feedback given" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
