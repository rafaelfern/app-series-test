import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function FormRow(props) {

    const [ isFocused, setIsFocused ] = useState(false);
    
    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const { children } = props;

    return(
        <View>
            {
                children && 
                    <TextInput 
                        onFocus={ () => {handleInputFocus()}}
                        onBlur={ () => setIsFocused(false)}
                        style={[styles.containerInput, {
                            borderColor: isFocused ? '#ffb3b3' : '#ddd',
                            borderWidth: isFocused ? 2 : 1,
                                      
                        }]}
                    />
                
            }
        </View>
    )
}

const styles = StyleSheet.create({

    containerInput: {
        
        borderRadius: 6,
        paddingVertical: 5,
        paddingLeft: 15,
        marginTop: 10,
        marginHorizontal: 50,
        fontSize: 16,
        color: '#0A100D'
    }

});
