import { Image, Text, TouchableOpacity, View } from 'react-native'

import { api } from '../../../../services/api'

import { ProductsCartDto } from '../../../../dtos/ProductsCartDto'
import { Minus, Plus, Trash } from 'phosphor-react-native'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledTouchableOpacity = styled(TouchableOpacity)

type Props = {
  data: ProductsCartDto
  handleDeleteItem: (id: string) => Promise<void>
  handleAddAmount: (id: string) => Promise<void>
  handleRemoveAmount: (id: string) => Promise<void>
}

export function CardProductCart({
  data,
  handleDeleteItem,
  handleAddAmount,
  handleRemoveAmount,
}: Props) {
  return (
    <StyledView className="p-2 mb-2 rounded-md flex-row bg-gray-300">
      <StyledImage
        source={{
          uri: `https://teste-132.s3.amazonaws.com/${data.product.imageUrl}`,
        }}
        alt={data.product.name}
        className="h-24 w-24 rounded-md"
        resizeMode="center"
      />

      <StyledView className="ml-2 flex-1 justify-between flex-row">
        <StyledView className="justify-between">
          <StyledText className="font-bold text-xl" numberOfLines={1}>
            {data.product.name}
          </StyledText>
          <StyledText className="text-lg font-medium" numberOfLines={1}>
            R$ {data.product.price.toFixed(2)}
          </StyledText>

          <StyledView className="flex-row">
            <StyledTouchableOpacity
              onPress={() => handleRemoveAmount(data.id)}
              className="px-2 bg-gray-400 items-center justify-center rounded-l-md"
            >
              <Minus size={12} weight="bold" />
            </StyledTouchableOpacity>

            <StyledText className="px-2 py-1 text-base text-center border-y border-gray-400">
              {data.amount}
            </StyledText>

            <StyledTouchableOpacity
              onPress={() => handleAddAmount(data.id)}
              className="px-2 bg-gray-400 items-center justify-center rounded-r-md"
            >
              <Plus size={12} weight="bold" />
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>

        <StyledTouchableOpacity onPress={() => handleDeleteItem(data.id)}>
          <Trash size={28} color="red" />
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  )
}
