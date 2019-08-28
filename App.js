import React, {Component, Fragment} from 'react';
import {AppLoading} from 'expo';
import {connect, Provider as StoreProvider} from 'react-redux'
import {Provider as PaperProvider} from 'react-native-paper';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import NavigationService from './navigation/util/navigationService'

import rootStore from './store'
import QRCodeScanner from "./screens/projects/components/Qr/QRCodeScanner";


class MainApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoadingComplete: false
        }
    }

    setLoadingComplete = (bool) => {
        this.setState({
            isLoadingComplete: bool
        })
    }

    render() {
        const {isLoadingComplete} = this.state
        const {skipLoadingScreen, isSocketConnected, isQrActive} = this.props
        if (!isLoadingComplete && !skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={loadResourcesAsync}
                    onError={handleLoadingError}
                    onFinish={() => handleFinishLoading(this.setLoadingComplete)}
                />
            );
        } else {
            return (
                <Fragment>
                    <View style={styles.container}>
                        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                        <AppNavigator ref={navigationRef => NavigationService.setTopLevelNavigator(navigationRef)}/>
                    </View>
                    {
                        !isSocketConnected && isQrActive ? <QRCodeScanner/> : null
                    }
                </Fragment>
            );
        }
    }

}

const mapStateToProps = state => ({
    isSocketConnected: state.socketConnection.isConnected,
    isQrActive: state.qrScanner.isScannerActive,
    hasConnectionSettled: state.hasConnectionSettled
})

const mapDispatchToProps = dispatch => ({
    // activateSocket
})

const Main = connect(mapStateToProps, mapDispatchToProps)(MainApp)

export default App = () => (
    <StoreProvider store={rootStore}>
        <PaperProvider>
            <Main/>
        </PaperProvider>
    </StoreProvider>
)

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        }),
    ]);
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
