import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Projects from '../screens/projects'
import ProjectView from "../screens/projects/components/ProjectView";
import CreateProject from "../screens/projects/components/CreateProject";
import Tasks from '../screens/tasks'
import CreateTasks from "../screens/tasks/components/CreateTasks";
import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import {CREATE_PROJECT_VIEW, PROJECTS_VIEW, PROJECT_VIEW,CREATE_TASK_VIEW} from "../constants/navigation";


const Project = createStackNavigator(
    {
        [PROJECTS_VIEW]: Projects,
        [PROJECT_VIEW]: ProjectView,
        [CREATE_PROJECT_VIEW]: CreateProject,
        [CREATE_TASK_VIEW] : CreateTasks
    },
    {
        defaultNavigationOptions: ({navigation}) => {
            const {routeName} = navigation.state
            return {
                headerTitle: `${routeName}`
            }
        }
    }
);

Project.navigationOptions = ({navigation}) =>{
    return {
        tabBarLabel: 'Projects',
        tabBarIcon: ({focused}) => (
            <TabBarIcon
                focused={focused}
                name={Platform.OS === 'ios' ? 'ios-apps' : 'md-apps'}
            />
        ),
        tabBarVisible: !(navigation.state.index > 0)
    }
};


const Task = createStackNavigator(
    {
        Tasks,
    }, {
        defaultNavigationOptions: ({navigation}) => {
            const {routeName} = navigation.state
            return {
                headerTitle: `${routeName}`
            }
        }
    }
);

Task.navigationOptions = {
    tabBarLabel: 'Tasks',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'}/>
    ),
};


const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    }
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};


const tabNavigator = createBottomTabNavigator({
    Project,
    Task,
    SettingsStack,
},);


export default tabNavigator;
