import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text,View,TouchableOpacity,StyleSheet,Dimensions ,Platform} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import * as Permissions from 'expo-permissions';

import { Ionicons } from '@expo/vector-icons';
import {BarCodeScanner} from "expo-barcode-scanner";
import {EXIT_QR_SCANNER} from '../../../../action/qrScannerAction'
import {SETUP_SOCKET_CONNECTION} from "../../../../action/socketActions";

const {height,width} = Dimensions.get('window')

styles = StyleSheet.create({
    camera:{
        width: '60%',
        height: '60%',
    },
    buttonContainer: {
        position: 'absolute',
        right: 10,
        top: 0,
        zIndex: 1
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    container: {
        width: width,
        height: height,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
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
        this.setState({
            scanned: true
        })
        this.props.setupSocket(data)
        this.props.exitQrScanner()
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
            <View style={styles.container}>
                <SafeAreaView style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.props.exitQrScanner}>
                        <Ionicons
                            name={Platform.OS === 'ios' ? 'ios-close-circle' : 'md-close-circle'}
                            size={35}
                            color={"white"}
                        />
                    </TouchableOpacity>
                </SafeAreaView>

                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleQrScanned}
                    style={styles.camera}
                />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setupSocket: host => dispatch({type: SETUP_SOCKET_CONNECTION, host}),
    exitQrScanner: () => dispatch({type: EXIT_QR_SCANNER})
})

export default connect(null,mapDispatchToProps)(QRCodeScanner)