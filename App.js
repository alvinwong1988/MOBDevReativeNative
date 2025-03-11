import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing icon from react-native-vector-icons
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(''); // For displaying validation error
  const navigation = useNavigation();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      setEmailError('Email is required.');
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError(''); // Clear the error if email is valid
    }
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
    } else if (emailError) {
      Alert.alert('Error', emailError);
    } else {
      Alert.alert('Success', `Welcome, ${email}!`);
      navigation.navigate('HomeScreen');
    }
  };

  const handleRegistration = () => {
    Alert.alert('Registration', 'Redirecting to registration page...');
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Redirecting to forgot password page...');
  };

  const handleManualPress = () => {
    Alert.alert('Manual', 'Opening the manual...');
  };

  return (
    <View style={styles.container}>
      {/* Manual Icon */}
      <TouchableOpacity style={styles.manualIcon} onPress={handleManualPress}>
        <Icon name="menu-book" size={30} color="#007BFF" />
      </TouchableOpacity>

      <Text style={styles.title} >Login Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        onBlur={validateEmail} // Trigger email validation on blur
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text> 
      </TouchableOpacity>

      {/* Registration and Forgot Password Links */}
      <TouchableOpacity onPress={handleRegistration}>
        <Text style={styles.linkText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    position: 'relative', // Ensures the manual icon can be positioned absolutely
  },
  manualIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  errorText: {
    width: '100%',
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 15,
    color: '#007BFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default App;
