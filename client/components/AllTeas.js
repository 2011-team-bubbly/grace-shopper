import React from 'react'
import {connect} from 'react-redux'
import TeaCard from './TeaCard'
import {fetchTeas} from '../store/TeasReducer'

export class AllTeas extends React.Component {
  componentDidMount() {
    this.props.loadTeas()
    console.log(this.props)
  }

  render() {
    const {teas} = this.props
    console.log('teas', teas)
    return (
      <div>
        <h1>All Teas</h1>
        <div className="all-teas">
          {teas.length && teas.map(tea => <TeaCard key={tea.id} tea={tea} />)}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  teas: state.teas
})

const mapDispatch = dispatch => ({
  loadTeas: () => dispatch(fetchTeas())
})

export default connect(mapState, mapDispatch)(AllTeas)
