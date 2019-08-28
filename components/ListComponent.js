import React, {Component} from 'react'
import {FlatList} from "react-native-gesture-handler";

class ListComponent extends Component{
    state = {
        selectedList: [], // Multiselection
        selected: null, // single selection
    }

    keyExtractor = (item) => item.id

    onPressItem = (id) =>{
        const {isMultiSelection, onPress} = this.props
        let selectedList, selected

        if(isMultiSelection){
            let indexOfId = this.state.selectedList.indexOf(id)
            if(indexOfId === -1){
                selectedList = this.state.selectedList.concat([id])
            }else{
                let tempList = this.state.selectedList.slice()
                tempList.splice(indexOfId,1)
                selectedList = tempList
            }
        }else{
            selected = this.state.selected === id? null: id
        }

        this.setState( state => ({
            [isMultiSelection? 'selectedList': 'selected']:  isMultiSelection? selectedList: selected
        }), () =>{
            if(onPress){
                const {selectedList,selected} = this.state
                onPress(id,selectedList,selected)
            }
        })
    }

    isSelected = ({id}) =>{
        const {isMultiSelection} = this.props
        const {selectedList, selected} = this.state
        return isMultiSelection? selectedList.indexOf(id) !== -1 : selected === id
    }

    renderedItem = ({item}) =>{
        const ItemComponent = this.props.itemComponent
        return (
            <ItemComponent
                id={item.id}
                onPressItem={this.onPressItem}
                item={item}
                selected={this.isSelected(item)}
            />
        )
    }

    render() {
        const {data} = this.props
        return (
            <FlatList
                data={Object.keys(data).map(key => (data[key]))}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderedItem}
            />
        )
    }
}

export default ListComponent