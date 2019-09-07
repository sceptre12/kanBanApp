import React, {Component,Fragment} from 'react'
import {connect} from 'react-redux'
import uuid from 'react-native-uuid'
import {TextInput, View, StyleSheet,Text, ScrollView} from "react-native";

import ListComponent from "../../../../components/ListComponent";
import {ListItem} from "../../../../components/ListItem";
import TaskModal from './taskModal'
import {ButtonBar} from "../../../../components/ButtonBar";

import {CREATE_PROJECT} from '../../../../action/projectActions'
import {LAUNCH_CREATE_TASK} from '../../../../action/navigation'


const styles = StyleSheet.create({
    screenContainer:{
      flex: 1
    },
    nameContainer: {
        padding: 25
    },
    descriptionContainer: {
        padding: 25,
        flex: 2,
        backgroundColor: 'green',
    },
    tasksContainer: {
        flex: 4,
        backgroundColor: 'blue',
    },
    taskTitle: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tasksWrapper: {
        flex:1,
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: 'red',
    },
    inputBox: {
        height: 70,
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: 'gray'
    },
    descriptionBox: {
        textAlignVertical: "top",
        flex: 1
    }
})

class CreateProject extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: uuid.v1(),
            name: '',
            tasks: {},
            description: '',
            inProgress: [],
            isCompleted: false,
            isModalActive: false
        }
    }


    updateName = name => this.setState({name})
    updateDescription = description => this.setState({description})
    toggleModal = () => this.setState(state => ({isModalActive: !state.isModalActive}))
    addTasks = tasks => this.setState(state => ({tasks: Object.assign(state.tasks, tasks)}))
    createProject = () => {
        const {name,description,tasks,inProgress,isCompleted, id} = this.state
        this.props.createProject({name,description,tasks,inProgress,isCompleted,id})
    }

    render() {
        const {name, description,isModalActive,id, tasks } = this.state
        const {createTasks} = this.props
        return (
            <Fragment>
                <View style={styles.screenContainer}>
                    <View style={styles.nameContainer}>
                        <TextInput
                            placeholder={"Name"}
                            style={styles.inputBox}
                            value={name}
                            onChangeText={this.updateName} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <TextInput
                            placeholder={"Description"}
                            style={{...styles.inputBox,...styles.descriptionBox}}
                            value={description}
                            multiline={true}
                            onChangeText={this.updateDescription}/>
                    </View>
                    <View style={styles.tasksContainer}>
                        <View style={styles.taskTitle}>
                            <Text>Project Tasks</Text>
                        </View>
                        <ScrollView style={styles.tasksWrapper}>
                            <ListComponent data={tasks} isMultiSelection={false} itemComponent={ListItem}/>
                        </ScrollView>
                    </View>
                    <ButtonBar
                        leftBtnText={"Add Tasks"}
                        leftBtnPress={this.toggleModal}
                        middleBtnText={"Create project"}
                        middleBtnPressed={this.createProject}
                        rightBtnText={"Create Tasks"}
                        rightBtnPress={createTasks.bind(null,this.addTasks, id)}
                    />
                </View>
                {
                    isModalActive? <TaskModal
                        isVisible={isModalActive}
                        closeModal={this.toggleModal}
                        addTasks={this.addTasks}
                        projectTasks={tasks}
                    /> : null
                }

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    createProject: project => dispatch({type: CREATE_PROJECT, project}),
    createTasks : (addTaskFunc, projectId) => dispatch({type: LAUNCH_CREATE_TASK,addTaskFunc, projectId})
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)