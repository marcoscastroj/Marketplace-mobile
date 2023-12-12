import { Text, View } from 'react-native'

import Animated, { Easing, FadeInUp } from 'react-native-reanimated'

import { Basket } from 'phosphor-react-native'

import { styled } from 'nativewind'

const StyledBasket = styled(Basket)
const StyledText = styled(Text)
const StyledView = styled(View)

const StyledAnimatedView = styled(Animated.View)

export function AuthHeader() {
  return (
    <StyledView className="items-center">
      <StyledBasket className="text-blue-600" size={80} weight="thin" />
      <StyledView className="flex-row gap-2">
        <StyledText className="text-4xl text-gray-900 font-bold">
          Shopping
        </StyledText>
        <StyledText className="text-4xl text-blue-600 font-bold">
          Unifacisa
        </StyledText>
      </StyledView>
    </StyledView>
  )
}
