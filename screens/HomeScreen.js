import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Socket from '../socket'
import { MonoText } from '../components/StyledText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});


class  HomeScreen extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    const connection = Socket.getSocket()
    connection.on('news', result=>{
      connection.emit("App_")
    })
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
    )
  }
}

const mapStateToProps = (state) =>({

})

const mapDispatchToProps = (dispatch) = ({

})

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)

