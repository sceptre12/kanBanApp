import React, {Component} from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View,} from 'react-native';

import ListComponent from "../../components/ListComponent";
import {ProjectItem} from "./components/ProjectItem";
import CreateProjectButton from './components/CreateProject/createProjectButton'
import QrButton from "./components/Qr/QrButton";

import {LAUNCH_PROJECT_VIEW} from '../../action/navigation'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});


class Projects extends Component {
    static navigationOptions = {
        headerLeft: <QrButton title={'Connect'}/>,
        headerBackTitle: null,
        headerRight: <CreateProjectButton/>
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {projects, openProjectView} = this.props
        return (
            <View style={styles.container}>
                <ListComponent data={projects} itemComponent={ProjectItem}
                               onPress={openProjectView}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    projects: state.projects,
    isConnected: state.socketConnection.isConnected
})

const mapDispatchToProps = dispatch => ({
    openProjectView: projectId => dispatch({type: LAUNCH_PROJECT_VIEW, projectId})
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)



