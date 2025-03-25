import { View, Text, FlatList } from 'react-native'
import React from 'react'
import slides from '@/utils/slides'
import { SafeAreaView } from 'react-native-safe-area-context'

const OnBoarding = () => {
  return (
    <SafeAreaView>
        <FlatList
            data={slides}
            renderItem={({ item }) => <View>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={{ flex: 1 }}
        />
    </SafeAreaView>
  )
}

export default OnBoarding