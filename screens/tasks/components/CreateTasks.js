import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View} from 'react-native'
import { TextInput,Checkbox} from 'react-native-paper';

import {CREATE_TASK} from "../../../action/taskAction";


class CreateTasks extends Component{
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            description: '',
            isComplete: '',
            dueDate: new Date(),
            reminders: [] // TODO: handle this later
        }
    }

    updateName = name => this.setState({name})
    updateDescription = description => this.setState({description})
    toggleIsComplete = ()=> this.setState(state => ({isComplete: !state.isComplete}))

    render() {
        const {name,description,isComplete,dueDate} = this.props
        return (
            <View>
                <TextInput label={"Name"} value={name} onChangeText={this.updateName}  />
                <TextInput label={"Description"} value={description} onChangeText={this.updateDescription}  multiline={true}/>
                <Checkbox status={isComplete? 'checked' : 'unchecked'} onPress={this.toggleIsComplete}/>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createTask: task => dispatch({type: CREATE_TASK, task})
})

export default connect(null,mapDispatchToProps)(CreateTasks)