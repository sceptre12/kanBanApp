import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-native'
import {LAUNCH_QR_SCANNER} from "../../../../action/qrScannerAction";


const QrButton = ({launchQrScanner,isConnected})=>(
    <Button color={isConnected? "#04BB4D": ""} onPress={launchQrScanner} title={isConnected?"Connected" :"Connect"} disabled={isConnected}/>
)


const mapStateToProps = state => ({
    isConnected: state.socketConnection.isConnected
})

const mapDispatchToProps = dispatch => ({
    launchQrScanner: () => dispatch({type: LAUNCH_QR_SCANNER})
})

export default connect(mapStateToProps,mapDispatchToProps)(QrButton)