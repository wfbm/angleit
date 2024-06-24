import React from 'react';
import { styles } from './Style'
import { View, Text } from 'react-native'
import { Camera, useCameraDevices, useCameraPermission } from 'react-native-vision-camera'

function App(): React.JSX.Element {

  const { hasPermission, requestPermission } = useCameraPermission()

  requestPermission()

  const devices = useCameraDevices()
  const device = devices[1]

  return (
    <View style={styles.fullScreen}>
    <Camera device={device} 
            isActive={true} 
            style={styles.fullScreen}> 
    </Camera>

    <Text style={styles.background}> { "text" }  </Text> 

    </View>
 );
}

export default App;
