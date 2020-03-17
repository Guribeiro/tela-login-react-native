import React, { useState, useEffect } from 'react';
import {

  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Animated
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [offset, setOffset] = useState(new Animated.ValueXY({
    x: 0,
    y: 80
  }));


  const [opacity, setOpacity] = useState(new Animated.Value(0));

  useEffect(() => {

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000, 
      })
    ]).start();
  }, [])

  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior="padding"
      enabled
    >
      <View style={styles.viewImage}>
        <Image
          style={styles.logo}
          source={require('./src/images/logo2.png')}
        />
      </View>

      <Animated.View
        style={[
          styles.viewLogin,
          {
            opacity: opacity,
            transform: [
              {
                translateY: offset.y
              }
            ]
          }
        ]}
      >
        <Text style={styles.text}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity
          style={styles.btnSubmit}
        >
          <Text
            style={styles.textSubmit}
          >Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnCadastrar}
        >
          <Text
            style={styles.textCadastrar}
          >
            Criar Conta
            </Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',


  },
  text: {
    textAlign: 'center',
    fontSize: 30,

  },
  logo: {
    borderRadius: 150,
    
  },
  viewImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',

  },
  viewLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: '100%',
    backgroundColor: 'white'

  },
  input: {

    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
    fontSize: 17,
    borderRadius: 7,
    backgroundColor: 'whitesmoke'
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '70%',
    margin: 20,
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center"
  },

  btnCadastrar: {

    width: '70%',
    borderRadius: 7,
    height: 45,
    alignItems: "center",
    justifyContent: "center"

  },
  textSubmit: {
    color: 'white',
    fontSize: 18

  },
  textCadastrar: {
    color: 'black',
    fontSize: 14
  }

});
