import React, { useState } from 'react';
import { CheckBox, Text } from 'native-base';
import { TouchableOpacity,  } from 'react-native';

export default function Checkbox() {
    const [rememberMe, setRememberMe] = useState(false); 

    const handleRememberMe = () => {
        setRememberMe(!rememberMe); 
    };

    return (
                <TouchableOpacity onPress={handleRememberMe} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox checked={rememberMe} onPress={handleRememberMe} />
                    <Text style={{ marginLeft: 30 }}></Text>
                </TouchableOpacity>
    );
}
