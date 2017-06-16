import React from 'react';
import { Platform, View, Text } from 'react-native';

const Header = (props) => {
    const { title, logo } = props;
    return (
        <View style={styles.header}>
            <Text>{title}{logo}</Text>
        </View>
    )
};

const styles = {
    header: {
        height: 50,
        backgroundColor: 'teal',
        marginTop: Platform.OS === 'android' ? 0 : 20
    }
};

export default Header;