import styled from '@emotion/styled'
import lionLogo from '../assets/lionLogo.svg'

const LogoWapper = styled.div`
  position: absolute;
  top: 50px;
  transform: auto;
  background: url(${lionLogo}) center no-repeat;
  background-size: 300px 300px;
  font-size: 20px;
  text-align: center;
  box-sizing: border-box;
  width: 400px;
  height: 338px;
  padding-top: 350px;
  transition: all 700ms ease-in-out 100ms;
`

function Logo() {
  return (
    <LogoWapper >
      2022년 아기사자를 모집합니다!
    </LogoWapper >
  )
};

export default Logo;