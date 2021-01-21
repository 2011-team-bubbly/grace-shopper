import React from 'react'
import {Link} from 'react-router-dom'

const TeaCard = props => {
  const {tea} = props
  return (
    <div className="UpdateSingle-tea">
      <div>
        <Link to={`/admin/${tea.id}`}>Update</Link>
        <img src="https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2017/01/desserts-quiz/images/compare-bubble-tea.png" />
        <p>Type of Tea: {tea.type}</p>
        <p>Flavor: {tea.flavor}</p>
        <p>Topping: {tea.topping}</p>
        <p>Size: {tea.size}</p>
        <p> price: ${tea.price / 100}</p>
      </div>
    </div>
  )
}

export default TeaCard
