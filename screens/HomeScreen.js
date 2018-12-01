import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import getDirections from 'react-native-google-maps-directions';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

   handleGetDirections = () => {
      const data = {
         source: {
          latitude: -33.8356372,
          longitude: 18.6947617
        },
        destination: {
          latitude: -33.8600024,
          longitude: 18.697459
        },
        params: [
          {
            key: "travelmode",
            value: "driving"        // may be "driving", "walking", "bicycling" or "transit" as well
          },
          {
            key: "dir_action",
            value: "navigate"       // this instantly initializes navigation using the given travel mode
          }
        ]
      }

      getDirections(data)
    }


  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Button
            onPress={this.handleGetDirections}
            title="GO HOME"/>
          </View>
        </ScrollView>
      </View>
    );
  }
}
