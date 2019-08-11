import React, {Component, Fragment} from 'react'
import {View,Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {SIGN_USER_IN} from '../../action/authenticationAction'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1c40f',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    base: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 50
    },
    textInput: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        padding: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: '50%',
        marginTop: 20
    }
})

class SignIn extends Component{
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }

    updateUserName = (text) => {
        this.setState({
            username: text
        })
    }

    signUserIn = () =>{
        const {username} = this.state
        this.props.signUserIn(username)
    }

    render(){
        const {username} = this.state
        return (
            <Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Smart Kan
                    </Text>
                </View>
                <View style={styles.base}>
                    <TextInput
                        style={styles.textInput}
                        value={username}
                        placeholder={"Username"}
                        onChangeText={this.updateUserName}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.signUserIn}
                    >
                        <Text> Submit </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    signUserIn: (userName)=> dispatch({type: SIGN_USER_IN, userName})
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
