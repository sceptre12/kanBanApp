import React , {Component} from 'react'
import {Button} from 'react-native'
import {connect} from 'react-redux'
import {LAUNCH_QR_SCANNER} from "../action/qrScannerAction";

class ConnectSocketButton extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Button onPress={this.props.launchQrScanner} title={"Connect"}/>
        );
    }
}

const mapStateToProps = state => ({
    isConnected: state.socketConnection.isConnected
})

const mapDispatchToProps = dispatch => ({
    launchQrScanner: () => dispatch({type: LAUNCH_QR_SCANNER})
})

export default connect(mapStateToProps,mapDispatchToProps)(ConnectSocketButton)