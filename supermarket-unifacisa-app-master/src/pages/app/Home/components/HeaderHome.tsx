import { Pressable, Text, View } from 'react-native'

import { AvatarHome } from './AvatarHome'

import { styled } from 'nativewind'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProp } from '../../../../routes/app-routes'

const StyledView = styled(View)
const StyleText = styled(Text)

export function HeaderHome() {
  const navigation = useNavigation<AppNavigatorRoutesProp>()

  function handlePageProfile() {
    navigation.navigate('profile')
  }
  return (
    <StyledView className="bg-blue-600 pt-12 pb-4 px-4 flex-row items-center justify-between">
      <StyledView className=" w-14" />
      <StyledView>
        <StyleText className="text-xl text-white uppercase font-bold">
          Produtos
        </StyleText>
      </StyledView>
      <Pressable onPress={handlePageProfile}>
        <AvatarHome />
      </Pressable>
    </StyledView>
  )
}
