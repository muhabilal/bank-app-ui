import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window");
const CardItem = ({
    imgUrl,
    price,
    cardType,
    cardNumber,
    bgColor,
}) => {
    return (
        <TouchableOpacity className="mr-4">
            <View className="rounded-3xl py-8 px-4 justify-between"
                style={{
                    width: width * 0.45,
                    height: height * 0.3,
                    backgroundColor: bgColor
                }}
            >
                <Image source={imgUrl} style={{ width: 65, height: 65 }} resizeMode='contain' />
                <View className="space-y-2">
                    <Text className="text-lg text-white"
                        style={{
                            fontFamily: "SpaceGroteskBold",
                        }}>
                        {cardNumber}
                    </Text>
                </View>
                <View className="space-y-2">
                    <Text
                        className="text-2xl text-white"
                        style={{
                            fontFamily: "SpaceGroteskBold",
                        }}
                    >
                        {price}
                    </Text>

                    <Text
                        className="font-medium text-lg text-white"
                        style={{
                            fontFamily: "SpaceGroteskBold",
                        }}
                    >
                        {cardType}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardItem

const styles = StyleSheet.create({})