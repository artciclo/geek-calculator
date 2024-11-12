import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, PanResponder, ImageBackground, TextInput, ScrollView, Keyboard } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  // Função para lidar com o clique dos botões da calculadora
  const handlePress = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Erro');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  // Arrastar o container da calculadora
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      setPos({ x: gestureState.moveX, y: gestureState.moveY });
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container} onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={{ uri: 'https://source.unsplash.com/random/1920x1080' }}
        style={styles.background}
        resizeMode="contain"
      >
        <View {...panResponder.panHandlers} style={styles.calculator}>
          <TextInput
            style={styles.display}
            value={input}
            editable={false}
            placeholder="0"
            placeholderTextColor="#aaa"
          />

          <View style={styles.buttons}>
            {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((btn) => (
              <TouchableOpacity key={btn} style={styles.button} onPress={() => handlePress(btn)}>
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  calculator: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  display: {
    backgroundColor: '#000',
    color: '#00FF41',
    fontSize: 32,
    width: 300,
    height: 60,
    textAlign: 'right',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4e4e50',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});
