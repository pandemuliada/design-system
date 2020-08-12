import React from 'react'
import { Button } from '../components/buttons'
import Heading from '../components/Heading'

const Home = () => {
  return (
    <div>
      <Button size="small" block>
        Small Button
      </Button>
      <Button size="normal">Normal Button</Button>
      <Button size="large">Large Button</Button>
      {/* Heading */}
      <Heading as="h1" size="6xl" uppercase>Heading Size 6XL</Heading>
      <Heading as="h2" size="5xl">Heading Size 5XL</Heading>
      <Heading as="h3" size="4xl">Heading Size 4XL</Heading>
      <Heading as="h4" size="3xl">Heading Size 3XL</Heading>
      <Heading as="h5" size="2xl">Heading Size 2XL</Heading>
      <Heading as="h6" size="xl">Heading Size XL</Heading>
      <Heading as="h6" size="lg">Heading Size LG</Heading>
      <Heading as="h6" size="base">Heading Size Base</Heading>
      <Heading as="h6" size="sm">Heading Size SM</Heading>
      <Heading as="h6" size="xs">Heading Size XS</Heading>
    </div>
  )
}

export default Home
