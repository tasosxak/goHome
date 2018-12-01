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

import Geocoder from 'react-native-geocoding';

import { MonoText } from '../components/StyledText';
import getDirections from 'react-native-google-maps-directions';

import { Constants, Location, Permissions } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };


        handleGetDirections = async () => {

            var {status} = await Permissions.askAsync(Permissions.LOCATION)

            if (status !== 'granted') {
                alert('Permission to access location was denied');
            } else  {

                var location = await Location.getCurrentPositionAsync({});

                var long = location.coords.longitude;
                var lat = location.coords.latitude;

                const data = {
                    origin: {
                        latitude: lat,
                        longitude: long
                    },
                    destination: {
                        latitude: -33.8600024,
                        longitude: 18.697459
                    },
                    params: [
                        {
                            key: "travelmode",
                            value: "walking"        // may be "driving", "walking", "bicycling" or "transit" as well
                        },
                        {
                            key: "dir_action",
                            value: "navigate"       // this instantly initializes navigation using the given travel mode
                        }
                    ]
                }

                getDirections(data);

            }
        }

            handleSMSSend = () => {


                const {  Permissions } = Expo;
              Permissions.askAsync(Permissions.SMS).then((status) => {

              //alert("Sending...")
              Expo.SMS.sendSMSAsync(['+306974394694'], "Μαζέψτε μεεεε. Ειμαι μεθυσμένοοοος !!!").then(result =>{
              //alert(JSON.stringify(result));

              }).catch(error=>{
              //alert(error)
              })
              })
              .catch(error=>{
              //alert(error);
              })

            }


  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Button
            onPress={this.handleGetDirections}
            title="GO HOME"/>
            <Text></Text>
            <Button
            onPress={this.handleSMSSend}
            title="SMS MOM"/>
          </View>
        </ScrollView>
      </View>
    );
  }
}
