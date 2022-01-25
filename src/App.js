import styled from '@emotion/styled'
import React from 'react'
import Logo from './components/Logo.js'

const Self = styled.div`
  position: relative;
  width: 1040px;
  margin-left: 35%;
`

function App() {
  return (
    <Self>
      <Logo />
    </Self>
  )
}

export default App;