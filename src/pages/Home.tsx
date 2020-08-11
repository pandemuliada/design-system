import React from 'react'
import { Button } from '../components/buttons'

const Home = () => {
  return (
    <div>
      <Button size="small" block>
        Small Button
      </Button>
      <Button size="normal">Normal Button</Button>
      <Button size="large">Large Button</Button>
    </div>
  )
}

export default Home
