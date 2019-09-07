import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-native-elements'
import {LAUNCH_CREATE_TASK} from "../../../action/navigation";

const CreateTaskButton = ({launchCreateProject}) => (
    <Button onPress={launchCreateProject} title={"Create Task"}/>
)

const mapDispatchToProps = dispatch => ({
    launchCreateProject: () => dispatch({type: LAUNCH_CREATE_TASK})
})

export default connect(null,mapDispatchToProps)(CreateTaskButton)
