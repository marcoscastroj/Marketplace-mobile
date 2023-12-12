import { Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Animated, { Easing, FadeInDown } from 'react-native-reanimated'

import { AuthNavigatorRoutesProps } from '../../../routes/auth-routes'

import { styled } from 'nativewind'

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledAnimatedView = styled(Animated.View)

interface Props {
  page: 'signIn' | 'signUp'
  content: string
}

export function AuthHandlePage({ page, content }: Props) {
  const router = useNavigation<AuthNavigatorRoutesProps>()

  const handlePage = () => {
    router.replace(page)
  }

  return (
    <StyledView className="items-center">
      <StyledTouchableOpacity className="w-[90%]" onPress={handlePage}>
        <StyledText className="text-center text-base font-bold text-gray-900 mb-1">
          {content}
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  )
}
