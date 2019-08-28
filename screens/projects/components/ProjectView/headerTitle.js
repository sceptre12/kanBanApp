import React from 'react'
import {connect} from 'react-redux'
import {Text} from 'react-native'

const HeaderTitle = ({project}) =>(
    <Text>
        {project.name}
    </Text>
)

const mapStateToProps = (state,otherProps) => ({
    project: state.projects[otherProps.projectId]
})

export default connect(mapStateToProps)(HeaderTitle)