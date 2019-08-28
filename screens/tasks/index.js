import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'


import ListComponent from "../../components/ListComponent";
import {ListItem} from '../../components/ListItem'
import {CREATE_TASK_VIEW} from "../../constants/navigation";


const styles = StyleSheet.create({
    container: {}
})


class Tasks extends Component {
    static navigationOptions = {}

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        /**
         * TODO bring down db tasks
         */
    }

    render() {
        const {tasks} = this.props

        return (
            <View style={styles.container}>
                <ListComponent data={tasks} itemComponent={ListItem} isMultiSelection={false}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    createTask: () => dispatch({type: CREATE_TASK_VIEW})
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)