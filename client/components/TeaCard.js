import React from 'react'

const TeaCard = props => {
  const {tea} = props
  return (
    <div className="single-tea">
      <img src="https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2017/01/desserts-quiz/images/compare-bubble-tea.png" />
      <p>Type of Tea: {tea.type}</p>
      <p>Flavor: {tea.flavor}</p>
      <p>Topping: {tea.topping}</p>
      <p>Size: {tea.size}</p>
    </div>
  )
}

export default TeaCard
