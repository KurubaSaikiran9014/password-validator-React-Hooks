import {useState} from 'react'
import {
  MainContainer,
  MiniContainer,
  Heading,
  Description,
  InputElement,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, setInput] = useState('')
  const [showErrorMsg, changeMsg] = useState(true)
  const onChangeInput = event => {
    setInput(event.target.value)
    if (userInput.length >= 8) {
      changeMsg(false)
    }
  }

  return (
    <MainContainer>
      <MiniContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <InputElement
          type="password"
          value={userInput}
          onChange={onChangeInput}
        />
        {showErrorMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </MiniContainer>
    </MainContainer>
  )
}

export default PasswordValidator
