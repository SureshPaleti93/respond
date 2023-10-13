// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isRespond: false}

  customerFeedback = resources => {
    const {emojis, loveEmojiUrl} = resources
    const {isRespond} = this.state
    if (isRespond === false) {
      return (
        <div className="content-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="list-container">
            {emojis.map(each => (
              <li className="list-element">
                <img
                  src={each.imageUrl}
                  className="img-element"
                  alt="{name}"
                  onClick={this.onRespond}
                />
                <p>{each.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="love-content-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1>Thank You!</h1>
        <p>
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  onRespond = () => {
    this.setState({isRespond: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl, id} = resources
    return (
      <div className="bg-container">
        {this.customerFeedback(emojis, loveEmojiUrl)}
      </div>
    )
  }
}
export default Feedback
