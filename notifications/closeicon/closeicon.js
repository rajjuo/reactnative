import React from 'react';
import {TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BUTTON_SIZE = 30
const BORDER_WIDTH = 1

function CloseIcon({color, removeItem}){
    return (
        <TouchableOpacity onPress={removeItem} style={[styles.button,{borderColor:color}]}>
            <Icon name={'close'} color='grey' size={BUTTON_SIZE/2} />
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    button:{
        justifyContent:'right',
        alignItems:'center',
        width:BUTTON_SIZE+BORDER_WIDTH,
        height:BUTTON_SIZE+BORDER_WIDTH,
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 10,
        right: 10
        
    }
})
export default CloseIcon;