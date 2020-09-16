import React, { Fragment } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// importando o Feed uma égua
import Feed from '../screens/Feed';

import camera from '../../assets/camera.png';
import logo from '../../assets/logo.png';
import igtv from '../../assets/igtv.png';
import send from '../../assets/send.png';


const MainNavigator = createStackNavigator(
    {
        Feed : Feed
    },
    {
        defaultNavigationOptions: {
            headerTitle: <Image source={logo} />,
            headerLeft:  (
                <TouchableOpacity style={{ marginLeft: 20 }}>
                    <Image source={camera} />
                </TouchableOpacity>
            ),
            headerRight: (
                <>
                    <TouchableOpacity style={{ marginRight: 30, flexDirection: 'row' }}>
                        <Image source={igtv} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 30, flexDirection: 'row' }}>
                        <Image source={send} />
                    </TouchableOpacity>
                </>
            )
        }
    }
);

export default createAppContainer(MainNavigator);