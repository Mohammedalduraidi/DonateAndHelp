import React from 'react';
import { StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 

class Donor_Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
     
   }
 }
 render() {
    return (
      <View style={styles.container}>
      <Text>
      welcome Profile
      </Text>
      </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = Donor_Campaign;