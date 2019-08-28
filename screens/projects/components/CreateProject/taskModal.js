import React, {Component} from 'react'
import {connect} from 'react-redux'
import Modal from 'react-native-modal'
import {Dimensions, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import ListComponent from "../../../../components/ListComponent";
import {ListItem} from '../../../../components/ListItem'
import {ButtonBar} from "../../../../components/ButtonBar";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalInnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 20
    },
    title: {
        flex: 1,
        justifyContent: 'center'
    },
    tasks: {
        flex: 4
    }
})

class TaskModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTasks: []
        }
    }

    updateSelectedTasks = (id, selectedTasks) => {
        this.setState({selectedTasks})
    }

    render() {
        const {isVisible, closeModal, tasks, addTasks} = this.props
        const {selectedTasks} = this.state
        const {height, width} = Dimensions.get('window')
        return (
            <Modal
                animationIn={"fadeIn"}
                animationOut={"fadeOut"}
                animationInTiming={500}
                animationOutTiming={500}
                isVisible={isVisible}
                onBackdropPress={closeModal}
                style={styles.modalContainer}
            >
                <View style={{...styles.modalInnerContainer, width: width * .8, height: height * .3}}>
                    <View style={styles.title}>
                        <Text>Available Tasks</Text>
                    </View>
                    <View style={styles.tasks}>
                        <ListComponent data={tasks} itemComponent={ListItem} isMultiSelection={true}
                                       onPress={this.updateSelectedTasks}/>
                    </View>
                    <ButtonBar
                        leftBtnText={"Add Tasks"}
                        rightBtnText={"Close Modal"}
                        leftBtnPress={addTasks.bind(selectedTasks)}
                        rightBtnPress={closeModal}
                        isLeftBtnDisabled={selectedTasks.length === 0}
                    />
                </View>
            </Modal>
        );
    }
}

const mapStateToDispatch = state => ({
    tasks: state.tasks
})

export default connect(mapStateToDispatch)(TaskModal)