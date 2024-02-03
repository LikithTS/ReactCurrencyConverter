/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

import { currencyByRupee } from './util/constants';
import CurrencyButtons from './components/CurrencyButtons';

function App(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';
  const [userInputValue, setUserInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue : Currency) => {
    if(!userInputValue) {
      Snackbar.show({
        text : 'Please enter valid number',
        duration : Snackbar.LENGTH_SHORT,
        textColor : '#B83227'
      })
    }

    const inputAmount = parseFloat(userInputValue)
    if(!isNaN(inputAmount)) {
      const convertedAmount = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedAmount.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      Snackbar.show({
        text : 'Number is not valid',
        duration : Snackbar.LENGTH_SHORT,
        textColor : '#B83227'
      })
    }
  }

  return (
    <>
      <StatusBar/>
      <View style={styles.container}>

        <View style={styles.inputFieldContainer}>
          <TextInput style = {styles.inputFiled} onChangeText={setUserInputValue} value={userInputValue} placeholder='0' 
          keyboardType='numeric' maxLength={14}/>
        </View>
        
      <View style={styles.resultDataContainer}>
          {resultValue && (
            <Text style = {styles.resultText} >{resultValue}</Text>
          )}
      </View>
        
        <View style = {styles.flexListContainer}>
          <FlatList numColumns={3} data={currencyByRupee} renderItem={({item}) => (
            <Pressable style = {[styles.button, targetCurrency === item.name && styles.selected]} onPress={() => buttonPressed(item)}>
              <CurrencyButtons name={item.name} flag={item.flag}/>
            </Pressable>
          )} 
            keyExtractor={item => item.name}/>
        </View>
      
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    height : '100%',
    backgroundColor : '#7B8788'
  },
  inputFieldContainer : {
    backgroundColor : '#A4B0BD',
    margin : 30,
    height : 50,
    borderRadius : 4
  },
  inputFiled : {
    height : 50,
    alignItems: 'center',
    justifyContent : 'center',
    borderWidth : 2,
    paddingStart : 10,
    marginBottom : 40,
    fontSize : 18,
    borderRadius : 4
  },
  resultText : {
    fontSize : 28,
    alignItems : 'center',
    textAlign : 'center',
    color : "#FFFFFF"
  },
  resultDataContainer : {
      height : 70,
  },
  flexListContainer: {
    justifyContent : 'space-evenly',
  },
  selected : {
    backgroundColor : "#616C6F",
  },
  button : {
    width : 100,
    height : 100,
    backgroundColor : "#EAF0F1",
    margin : 10,
    borderRadius : 6,
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },

});

export default App;
