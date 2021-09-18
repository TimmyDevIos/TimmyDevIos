import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';

import HomeScreen from './src/screens/HomeScreen';
import OrderScreen from './src/screens/OrderScreen';
import StoreScreen from './src/screens/StoreScreen';
import VoucherScreen from './src/screens/VoucherScreen';
import MoreScreen from './src/screens/MoreScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Order':
                iconName = 'rest';
                break;
              case 'Store':
                iconName = 'isv';
                break;
              case 'Voucher':
                iconName = 'gift';
                break;
              case 'More':
                iconName = 'appstore-o';
                break;
              default:
                iconName = 'Safety';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FB8E18',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            headerShown: false,// ẩn hearder tabbar
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            tabBarLabel: 'Đạt hàng',
          }}
        />
        <Tab.Screen
          name="Store"
          component={StoreScreen}
          options={{
            tabBarLabel: 'Cửa hàng',
            headerShown: false,// ẩn hearder tabbar
          }}
        />
        <Tab.Screen
          name="Voucher"
          component={VoucherScreen}
          options={{
            tabBarLabel: 'Ưu đãi',
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarLabel: 'Khác',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
