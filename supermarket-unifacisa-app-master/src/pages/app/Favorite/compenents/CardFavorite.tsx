import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'

import { api } from '../../../../services/api'

import { ProductsCartDto } from '../../../../dtos/ProductsCartDto'
import { Trash } from 'phosphor-react-native'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledPressable = styled(Pressable)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledTouchableOpacity = styled(TouchableOpacity)

type Favorite = {
  id: string
  product: {
    id: string
    name: string
    price: number
    imageUrl: string
  }
}

type Props = {
  data: Favorite
  handleRemoveFavorite: (id: string) => Promise<void>
  handleDetailsPage: (productId: string) => void
}

export function CardFavorite({
  data,
  handleRemoveFavorite,
  handleDetailsPage,
}: Props) {
  return (
    <StyledPressable
      onPress={() => handleDetailsPage(data.product.id)}
      className="p-2 mb-2 rounded-md flex-row bg-gray-300 items-center"
    >
      <StyledImage
        source={{
          uri: `https://teste-132.s3.amazonaws.com/${data.product.imageUrl}`,
        }}
        alt={data.product.name}
        className="h-20 w-20 rounded-md"
        resizeMode="cover"
      />

      <StyledView className="ml-2 flex-1 justify-between flex-row">
        <StyledView className="">
          <StyledText className="font-bold text-xl" numberOfLines={1}>
            {data.product.name}
          </StyledText>
          <StyledText className="text-lg font-medium" numberOfLines={1}>
            R$ {data.product.price.toFixed(2)}
          </StyledText>
        </StyledView>

        <StyledTouchableOpacity onPress={() => handleRemoveFavorite(data.id)}>
          <Trash size={25} color="red" />
        </StyledTouchableOpacity>
      </StyledView>
    </StyledPressable>
  )
}
