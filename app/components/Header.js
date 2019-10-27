import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>내가 무엇을 해야 할까요?</Text>
      <Text style={styles.headertext}>목록으로 정리해보아요!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    headercontainer: {
        marginTop: 60,
        marginBottom:50,
    },
    headertext:{
        fontSize : 25,
        fontWeight: 'bold',
        color: '#3f4e66'
    }
  });