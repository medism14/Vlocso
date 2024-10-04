import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});