import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  
  async onPressLearnMore() {
    const response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyD9_GhQOiX4d3YDfiZb0pPHDPxruNFEg-Y&location=-27.596971,-48.588820&radius=1000&type=pharmacy');
    console.warn(response);

    const json = await response.json();
    console.warn(JSON.stringify(json))
    pharms.forEach(pharm => {
      console.warn("Farmácia: " + pharm.name)
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Changes you make will automatically reload.</Text>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
        />
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
