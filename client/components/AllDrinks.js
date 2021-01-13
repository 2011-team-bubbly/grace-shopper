import React from 'react'
import {connect} from 'react-redux'
import DrinkCard from './DrinkCard'

export class AllDrinks extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>All Drinks</h1>
        <div className="all-drinks">
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
          <DrinkCard />
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
