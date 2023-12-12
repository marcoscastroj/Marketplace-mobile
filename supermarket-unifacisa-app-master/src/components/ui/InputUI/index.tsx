import MaskInput, { MaskInputProps } from 'react-native-mask-input'

import { styled } from 'nativewind'
import { Text, View } from 'react-native'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledMaskedTextInput = styled(MaskInput)

type Props = MaskInputProps & {
  messageError?: string | null
}

export function InputUI({ messageError, ...props }: Props) {
  return (
    <StyledView>
      <StyledMaskedTextInput
        {...props}
        className={`w-full bg-gray-300/90 p-3 rounded-md px-2 text-lg ${
          messageError && 'border-2 border-gray-700'
        }`}
      />
      {messageError && (
        <StyledText className="text-gray-700 font-semibold text-base">
          {messageError}
        </StyledText>
      )}
    </StyledView>
  )
}
