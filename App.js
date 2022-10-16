import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'

export default function App() {

  const [resultado, setResultado] = useState(0);
  const [contador, setContador] = useState(0);

  const array = (num) => {
    setContador( (c) => c*10 + num )
  }

  const reset = (num) => {
    setContador( num )
    setResultado( num )
  }

  const CtoF = () => {
    const fare = ((contador * 1.8) + 32 )
    setResultado(fare + " °F")
  }

  const CtoK = () => {
    const fare = contador * 1 + 273.15
    setResultado(fare + " °K")
  }

  const FtoC = () => {
    const fare = ((contador -32)*5 ) 
    setResultado(fare / 9  + " °C")
  }

  const FtoK = () => {
      const fare = ((contador-32) * (5/9)) 
    setResultado(fare + 273.15 + " °K")
  }

  const KtoC = () => {
    setResultado(contador - 273.15 + " °C")
  }

  const KtoF = () => {
    const fare = ((contador-273.15) * (9/5)) 
    setResultado(fare + 32 + " °F")
  }

  return (

      <View style={styles.container}>
        <StatusBar style="auto" backgroundColor='#F5EFE6' />

        <Text style={styles.resultadoTit}>Resultado</Text>
        
        <Text style={styles.resultado}>{ resultado }</Text>

        <Text style={styles.contador}>{ contador }</Text>

      {/* opciones */}

      <View style={styles.linea}>
        <View style={styles.butt}>
          <TouchableOpacity onPress={CtoF} >
            <Text style={styles.textChiqui}>°C  a °F</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.butt}>
          <TouchableOpacity onPress={CtoK} >
            <Text style={styles.textChiqui}>°C  a °K</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.butt}>
          <TouchableOpacity onPress={FtoC} >
            <Text style={styles.textChiqui}>°F  a °C</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.linea}>
        <View style={styles.butt}>
          <TouchableOpacity onPress={FtoK} >
            <Text style={styles.textChiqui}>°F  a °K</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.butt}>
          <TouchableOpacity onPress={KtoC} >
            <Text style={styles.textChiqui}>°K  a °C</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.butt}>
          <TouchableOpacity onPress={KtoF} >
            <Text style={styles.textChiqui}>°K  a °F</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botones */}

        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => array(9)}>
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(8)}>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(7)}>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => array(6)}>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(5)}>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(4)}>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => array(3)}>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(2)}>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(1)}>
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          </View>

        <View style={styles.subContainer}>
        <TouchableOpacity style={styles.btnAC} onPress={() => reset(0)}>
            <Text style={styles.text}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDou} onPress={() => array(0)}>
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
        </View>

        </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#F5EFE6',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 50
  },
  subContainer:{
    justifyContent: 'center',
    height: 96,
    width: '100%',
    paddingHorizontal:10,
    flexDirection: 'row-reverse',
  },
  btn:{
    width: 100,
    height: 80,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#E8DFCA",
    borderRadius: 25,
    margin: 8
  },
  btnAC:{
    width: 100,
    height: 80,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#AEBDCA",
    borderRadius: 25,
    margin: 8
  },
  btnDou:{
    width: 216,
    height: 80,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#E8DFCA",
    borderRadius: 25,
    margin: 8,
  },
  text:{
    fontSize:40,
    color: 100,
    paddingHorizontal:10,
  },
  linea:{
    width: '100%',
    paddingHorizontal:40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  butt:{
    width: 90,
    height: 40,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#AEBDCA",
    borderRadius: 5,
    margin: 8
  },
  textChiqui:{
    color: 100,
  },
  resultadoTit:{
    textAlign: 'right',
    fontSize:40,
    color: '#94B49F',
    width: '100%',
    paddingHorizontal: 47,
    marginBottom: 20,
  },
  resultado:{
    textAlign: 'right',
    fontSize:30,
    color: '#94B49F',
    width: '100%',
    paddingHorizontal: 47,
    marginBottom: 80,
  },
  contador:{
    textAlign: 'right',
    fontSize:40,
    color: '#7895B2',
    width: '100%',
    paddingHorizontal: 47,
    marginBottom: 40,
  },
})