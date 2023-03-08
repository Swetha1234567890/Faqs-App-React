// Write your code here.
import {Component} from 'react'
import './index.css'

const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isClicked} = this.state

    if (isClicked) {
      return (
        <div className="answer-container">
          <hr className="line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleClicked = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  renderImage = () => {
    const {isClicked} = this.state
    const img = isClicked ? minusImg : plusImg
    const imgAltText = isClicked ? 'minus' : 'plus'

    return (
      <button className="plus-btn" type="button" onClick={this.onToggleClicked}>
        <img src={img} className="plus-btn" alt={imgAltText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="list-item-container">
        <div className="container">
          <div className="question-container">
            <h1 className="question">{questionText}</h1>
            {this.renderImage()}
          </div>
          {this.renderAnswer()}
        </div>
      </li>
    )
  }
}

export default FaqItem
