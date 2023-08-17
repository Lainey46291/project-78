import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
yarn add @react-navigation/stack


export default function App() {
  return (
    <View style={styles.container}>
     <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Stellar Stage</Text>
      </View>
      <TouchableOpacity style = {styles.routeCard} onPress ={() =>
      this.props.navigation.navigate("TonightSky")
      }>
      <Text style ={styles.routeText}>Tonight Sky</Text>
      <Image source = {require("./night-sky.png")} style ={{width:80, height:80}}></Image>
      <Card>
        <AssetExample />
      </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
