import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PropertyDetails = () => {
    const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>PropertyDetails</Text>
    </View>
  )
}

export default PropertyDetails