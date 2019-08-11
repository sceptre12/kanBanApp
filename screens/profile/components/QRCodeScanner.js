import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text,View,Button,StyleSheet,Dimensions} from 'react-native'
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import {BarCodeScanner} from "expo-barcode-scanner";
import {SETUP_SOCKET_CONNECTION} from "../../../action/socketActions";

const {height,width} = Dimensions.get('window')
styles = StyleSheet.create({
    camera:{
        width: width,
        height: height
    }
})

class QRCodeScanner extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasCameraPermission: null,
            scanned: false,
        };
    }

    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };

    handleQrScanned = ({type,data}) =>{
        this.props.setupSocket(data)
    }

    render(){
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleQrScanned}
                    style={styles.camera}
                />

                {scanned && (
                    <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
                )}
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setupSocket: port => dispatch({type: SETUP_SOCKET_CONNECTION, port})
})

export default connect(null,mapDispatchToProps)(QRCodeScanner)