/** @format */

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { NavigationProp } from '@react-navigation/native';
import globalStyles from '../../globals/globalStyles';

interface ProfileProps {
  navigation: NavigationProp<any>;
}

const Profil: React.FC<ProfileProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={[globalStyles.pageDefaultStyle, styles.container]}>
      <Text style={globalStyles.text2xl}>Voici le texte</Text>
      <Button
        title="Aller à la page CGU"
        onPress={() => navigation.navigate('CGU')}
      />
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});