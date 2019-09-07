import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {View,ScrollView, Text,StyleSheet} from "react-native";

import ListComponent from "../../../../components/ListComponent";
import {ListItem} from "../../../../components/ListItem";
import {ButtonBar} from "../../../../components/ButtonBar";
import HeaderTitle from './headerTitle'
import TaskModal from "../CreateProject/taskModal";

import {ADD_TASKS} from "../../../../action/projectActions";
import {CREATE_TASK} from '../../../../action/taskAction'

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})


/**
 * Allow the ability to edit project name
 */
class ProjectView extends Component{

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <HeaderTitle projectId={navigation.getParam('projectId')}/>
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isModalActive: false
        }
    }

    toggleModal = () => this.setState(state => ({isModalActive: !state.isModalActive}))

    render() {
        const {project,addTasks} = this.props
        const {isModalActive} = this.state
        return (
            <Fragment>
                <View style={styles.container}>
                    <View >
                        <Text>
                            {project.name}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {project.description}
                        </Text>
                    </View>
                    <ScrollView>
                        <ListComponent data={project.tasks} isMultiSelection={true} itemComponent={ListItem}/>
                    </ScrollView>
                    <View >
                        <ButtonBar
                            leftBtnText={"Add Tasks"}
                            leftBtnPress={this.toggleModal}
                            rightBtnText={"Create Tasks"}
                        />
                    </View>
                </View>
                {
                    isModalActive? <TaskModal isVisible={isModalActive} closeModal={this.toggleModal} addTasks={addTasks}/>: null
                }
            </Fragment>
        )
    }
}

const mapStateToProps = (state,otherProps) => ({
    project: state.projects[otherProps.navigation.getParam('projectId')]
})

const mapDispatchToProps = (dispatch,otherProps) => {
    const projectId = otherProps.navigation.getParam('projectId')
    return {
        addTasks: tasks => dispatch({type: ADD_TASKS, tasks, projectId }),
        createTask: task => dispatch({type: CREATE_TASK, task, projectId })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectView)