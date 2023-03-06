import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #24263c;
  align-items: center;
`

export const MiniContainer = styled.div`
  width: 40vw;
  background-color: #383a4e;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff;
`

export const Description = styled.p`
  font-size: 20px;
  font-family: 'Roboto';

  color: #f8fafc;
`

export const InputElement = styled.input`
  align-self: stretch;
  height: 40px;
  margin: 20px;
  border-width: 0px;
  background-color: #ffffff;
`

export const ErrorMsg = styled.p`
  font-size: 15px;
  font-family: 'Roboto';

  color: #ef4444;
`
