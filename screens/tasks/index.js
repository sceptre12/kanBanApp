import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'


import ListComponent from "../../components/ListComponent";
import {ListItem} from '../../components/ListItem'

import {LAUNCH_TASK_VIEW} from '../../action/navigation'
import {CREATE_TASK_VIEW} from "../../constants/navigation";
import CreateTaskButton from "./components/createTaskButton";


const styles = StyleSheet.create({
    container: {}
})


class Tasks extends Component {
    static navigationOptions = {
        headerRight: <CreateTaskButton/>
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const {tasks, openTaskView} = this.props

        return (
            <View style={styles.container}>
                <ListComponent data={tasks} itemComponent={ListItem} isMultiSelection={false} onPress={openTaskView}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    createTask: () => dispatch({type: CREATE_TASK_VIEW}),
    openTaskView: () => dispatch({type: LAUNCH_TASK_VIEW})
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)