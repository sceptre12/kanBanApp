import React from 'react'
import {connect} from 'react-redux'
import {Button, StyleSheet} from "react-native";
import {LAUNCH_CREATE_PROJECT} from "../../../../action/navigation";

const CreateProjectButton = ({launchCreateProject}) => (
    <Button onPress={launchCreateProject} title={"Create Project"}/>
)

const mapDispatchToProps = dispatch => ({
    launchCreateProject: () => dispatch({type: LAUNCH_CREATE_PROJECT})
})

export default connect(null,mapDispatchToProps)(CreateProjectButton)
