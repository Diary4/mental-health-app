import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text>
        This screen doesn't exist.
      </Text>
    </View>
  )
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotFound;