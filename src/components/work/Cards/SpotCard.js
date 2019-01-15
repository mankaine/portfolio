import React from 'react'
import Card from './Card'

const SpotCard = props => {
  const bulb = [
    {
      className: 'github-link',
      url: 'https://github.com/winstonlan/Spot',
      src: './images/github.png',
    }
  ]

  return(
    <Card
      title='Spot'
      description='An iOS app I worked on with my roomate to record IOUs, make requests, and fulfill payments.'
      techStack='Swift - Firebase'
      bulbs={bulb}
    />
  )
}

export default SpotCard 
