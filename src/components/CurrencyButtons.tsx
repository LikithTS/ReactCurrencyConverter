import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'

type CurrencyButtonPros = PropsWithChildren<{
    name : String;
    flag : String;
}>

const CurrencyButtons = (props : CurrencyButtonPros) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.flagContainer}>{props.flag}</Text>
      <Text style = {styles.nameContainer}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent :'space-evenly'
    },
    flagContainer : {
        fontSize : 28,
        marginBottom : 6
    },
    nameContainer : {
        fontSize : 16
    }
})

export default CurrencyButtons