import { Image } from 'react-native'

import { styled } from 'nativewind'
import { useAuth } from '../../../../hooks/useAuth'
import { UserCircle } from 'phosphor-react-native'

const StyledImage = styled(Image)
const StyledUserCircle = styled(UserCircle)

export function AvatarHome() {
  const { user } = useAuth()

  return (
    <>
      {user.avatar ? (
        <StyledImage
          source={{ uri: user.avatar }}
          className="flex-row h-10 w-10 bg-gray-500 rounded-full items-center justify-center"
        />
      ) : (
        <StyledUserCircle size={40} className="text-gray-100" />
      )}
    </>
  )
}
