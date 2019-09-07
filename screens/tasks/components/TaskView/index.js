import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View,  Text} from 'react-native'

class TaskView extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {task} = this.props
        return (
            <View>
                <Text>{task.name}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state,otherProps) => ({
    task: state.tasks[otherProps.navigation.getParam('taskId')]
})

export default connect(mapStateToProps)(TaskView)