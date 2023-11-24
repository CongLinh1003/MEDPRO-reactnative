import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenHome from './home/ScreenHome';
import ScreenAccount from './account/ScreenAccount';
import notiScreen from './notification/notiScreen';
import ScreenAllRecord from './patientRecord/ScreenAllRecord';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation, route }) => (
    <Stack.Navigator>
        <Stack.Screen
            name='ScreenHome' component={ScreenHome}
        />
    </Stack.Navigator>
);

const AccountStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='ScreenAccount' component={ScreenAccount} options={{ headerShown: false }} />
    </Stack.Navigator>
)
const NotificationStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='ScreenNoti' component={notiScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);
const PatientRecordStack = () => {
    <Stack.Navigator>
        <Stack.Screen name='ScreenRecords' component={ScreenAllRecord} options={{ headerShown: false }} />
    </Stack.Navigator>
}

const mainApp = () => {
    return (
        <Tab.Navigator initialRouteName='TabHome'>
            <Tab.Screen
                name='TabHome'
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='TabPatientRecord'
                component={PatientRecordStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Hồ sơ',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="folder-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='TabNotification'
                component={NotificationStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="notifications-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='TabAccount'
                component={AccountStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-circle-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default mainApp

const styles = StyleSheet.create({})