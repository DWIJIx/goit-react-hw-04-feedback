import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics"
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  } 
 
  increment = (name) => {
    console.log(name)
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }))
  // if (name === 'good') {
  //     this.setState((prevState) => ({
  //       good: prevState.good + 1
  //     }));
  //   }
  //   if (name === 'neutral') {
  //     this.setState((prevState) => ({
  //       neutral: prevState.neutral +1
  //     }));
  //   }
  //   if (name === 'bad') {
  //     this.setState((prevState) => ({
  //       bad: prevState.bad + 1,
  //     }));
  //   }
}

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = good + neutral + bad;
    return totalFeedbacks;
  }
  countPositiveFeedbackPercentage = () => {
    const positivPercentage = Math.round(this.state.good / this.countTotalFeedback() * 100) || 0
    return positivPercentage;
  }

  render() {
    // const {good, neutral, bad} = this.state
    const options = Object.keys(this.state);
    return (
    <Layout>
      <GlobalStyle/>
      <div>
        <Section title = {'Please, leave feedback'}>
           <FeedbackOptions options={options} onLeaveFeedback={this.increment}/>
        </Section>
         
        <Section title = {'Statistics'}>
             {this.countTotalFeedback() > 0 ?
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              /> :
              <Notification message={'There is no feedback'} />}
        </Section>
      </div>
        
   </Layout>
    
  );
  }
};