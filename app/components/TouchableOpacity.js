import React, { Component } from 'react'
import {
   View,
   TouchableOpacity,
   Text,
   StyleSheet
} from 'react-native'

export default TouchableOpacityExample = (props) => {
   return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Text style = {styles.button}>
                Add Contact(0)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style = {styles.button}>
                Update Profile
                </Text>
            </TouchableOpacity>
        </View>
   )
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   button: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      color: '#ff8080'
   }
})