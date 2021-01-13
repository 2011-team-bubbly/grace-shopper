import React from 'react'
import {connect} from 'react-redux'

export class AllDrinks extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>All Drinks</h1>
        <div className="all-drinks">
          <div className="single-drink">
            <img src="https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2017/01/desserts-quiz/images/compare-bubble-tea.png" />
            <p>Tea Type</p>
            <p>Flavor</p>
            <p>Topping</p>
            <p>Size</p>
          </div>
          <div className="single-drink">
            <img src="https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2017/01/desserts-quiz/images/compare-bubble-tea.png" />
            <p>Tea Type</p>
            <p>Flavor</p>
            <p>Topping</p>
            <p>Size</p>
          </div>
          <div className="single-drink">
            <img src="https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2017/01/desserts-quiz/images/compare-bubble-tea.png" />
            <p>Tea Type</p>
            <p>Flavor</p>
            <p>Topping</p>
            <p>Size</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

// export default connect(mapState, mapDispatch)(AllDrinks);
