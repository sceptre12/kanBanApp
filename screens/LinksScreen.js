import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {MonoText} from "../components/StyledText";

class LinksScreen extends Component{

  constructor(props) {
    super(props);
  }

  render(){
    return (
        <View style={styles.container}>
          <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Image
                  source={
                    __DEV__
                        ? require('../assets/images/robot-dev.png')
                        : require('../assets/images/robot-prod.png')
                  }
                  style={styles.welcomeImage}
              />
            </View>

            <View style={styles.getStartedContainer}>

              <Text style={styles.getStartedText}>Get started by opening</Text>

              <View
                  style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                <MonoText>screens/HomeScreen.js</MonoText>
              </View>

              <Text style={styles.getStartedText}>
                Change this text and your app will automatically reload.
              </Text>
            </View>


          </ScrollView>

          <View style={styles.tabBarInfoContainer}>
            <Text style={styles.tabBarInfoText}>
              This is a tab bar. You can edit it in:
            </Text>

            <View
                style={[styles.codeHighlightContainer, styles.navigationFilename]}>
              <MonoText style={styles.codeHighlightText}>
                navigation/MainTabNavigator.js
              </MonoText>
            </View>
          </View>
        </View>
    );
  }

}


export default LinksScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
