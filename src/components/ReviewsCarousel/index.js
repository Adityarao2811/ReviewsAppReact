// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  moveLeft = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    } else {
      this.setState({id: 0})
    }
  }

  moveRight = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    console.log(reviewsList.length)
    const lengthOfArray = reviewsList.length
    if (id < lengthOfArray - 1) {
      this.setState(prevState => ({id: prevState.id + 1}))
    } else {
      this.setState({id: lengthOfArray - 1})
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[id]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.moveLeft}
            data-testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            type="button"
            onClick={this.moveRight}
            data-testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
