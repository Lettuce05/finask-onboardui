import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import Onboard from './components/Onboard';
import { Feather } from '@expo/vector-icons';


function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/images/onboard1.png'),
      require('./assets/images/onboard2.png'),
      require('./assets/images/onboard3.png'),
    ]);

    const fontAssets = cacheFonts([
      Feather.font,
      {
        "Play-Regular": require("./assets/fonts/Play-Regular.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf")
      }
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  if (!isReady){
    return <AppLoading 
      startAsync={loadAssetsAsync}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />;
  } else {
    return (
      <View style={styles.container}>
        <Onboard />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});