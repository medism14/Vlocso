import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface AnnounceEditProps {
  navigation: any;
  route: any;
}

const AnnounceEdit: React.FC<AnnounceEditProps> = ({ navigation, route }) => {
  const { item } = route.params;

  useEffect(() => {
    console.log("voici l'item", item);
  }, [item])

  return (
    <View>
      <Text>AnnounceEdit</Text>
    </View>
  )
}

export default AnnounceEdit

const styles = StyleSheet.create({})