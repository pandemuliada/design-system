import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'

const Button = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.getColor('primary')};
  border: none;
  padding: 10px 15px;
`

function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr' }}>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>Design System</div>
        <Button>Primary Button</Button>
      </div>
    </div>
  )
}

export default App
