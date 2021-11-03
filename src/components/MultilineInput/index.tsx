import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { TextInput as PaperTextInput } from 'react-native-paper'

import { StyledContainer } from '../StyledContainer'

interface MultilineInputProps extends TextInputProps {
  value?: string
  placeholder?: string
  onChangeText?: (text: string) => void
}

// Multiline style
const PAPER_TEXT_INPUT_STYLE = {
  backgroundColor: 'white',
  borderRadius: 4,
  height: 160,
  width: '100%',
}

const RN_TEXT_INPUT_STYLE = {
  fontSize: 20,
  height: 160,
  padding: 16,
  textAlignVertical: 'top',
  width: '100%',
}

export const MultilineInput: React.FC<MultilineInputProps> = ({
  value,
  placeholder,
  onChangeText,
  editable = true,
}) => (
  <StyledContainer>
    <PaperTextInput
      value={value}
      style={PAPER_TEXT_INPUT_STYLE}
      theme={{
        colors: {
          disabled: 'white',
          primary: 'white',
        },
      }}
      selectionColor={'black'}
      multiline={true}
      disabled={!editable}
      onChangeText={onChangeText}
      placeholder={placeholder}
      render={props => (
        <TextInput {...props} style={RN_TEXT_INPUT_STYLE as any} />
      )}
    />
  </StyledContainer>
)
