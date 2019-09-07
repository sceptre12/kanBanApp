import React, {Component} from 'react'
import uuid from 'react-native-uuid'
import {connect} from 'react-redux'
import {View} from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Input, CheckBox} from 'react-native-elements';

import {ButtonBar} from "../../../components/ButtonBar"

import {CREATE_TASK} from "../../../action/taskAction";


class CreateTasks extends Component{
    constructor(props) {
        super(props);
        this.state ={
            id:  uuid.v1(),
            name: '',
            description: '',
            isComplete: false,
            dueDate: new Date(),
            reminders: [] // TODO: handle this later
        }
    }

    updateName = name => this.setState({name})
    updateDescription = description => this.setState({description})
    updateDate = dueDate => this.setState({dueDate})
    toggleIsComplete = () => this.setState(state => ({isComplete: !state.isComplete}))

    render() {
        const {name,description,isComplete,dueDate} = this.state
        const {createTask} = this.props
        return (
            <View>
                <Input label={"Name"} value={name} onChangeText={this.updateName}  />
                <Input label={"Description"} value={description} onChangeText={this.updateDescription}  multiline={true}/>
                <CheckBox title={"Is Complete"} checked={isComplete} onPress={this.toggleIsComplete} />
                <DatePicker
                    style={{width: 200}}
                    date={dueDate}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    mode={"datetime"}
                    onDateChange={this.updateDate}
                />
                <View>
                    <ButtonBar
                        middleBtnText={"Create Tasks"}
                        middleBtnPressed={createTask.bind(null,Object.assign({},this.state))}
                    />
                </View>
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch,{navigation}) => ({
    createTask: task => {
        const addTaskFunc = navigation.getParam('addTaskFunc')
        if(addTaskFunc){
            addTaskFunc({[task.id]: task})
        }
        dispatch({type: CREATE_TASK, task })
    }
})

export default connect(null,mapDispatchToProps)(CreateTasks)