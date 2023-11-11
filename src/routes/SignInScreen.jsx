import React from 'react'
import styled from 'styled-components'
import SocialKakao from '../components/SocialKakao'

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 48px;
  justify-content: center;
  align-items: center;
`

function SignInScreen() {
  return (
    <SignInContainer>
      <div>ShieldHead</div>
      <SocialKakao />
    </SignInContainer>
  )
}

export default SignInScreen