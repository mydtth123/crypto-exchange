import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// SCREEN
import {HomeScreen, WelcomeScreen, CoinsModalScreen} from '@app/Screens';
import {ApplicationStyles} from '@app/Themes';

export type NavigatorParamList = {
  home: undefined;
  welcome: undefined;
  'coins-modal': undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome">
          <Stack.Group>
            <Stack.Screen
              name="welcome"
              component={WelcomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name="coins-modal"
              component={CoinsModalScreen}
              options={({navigation}) => ({
                presentation: 'modal',
                title: 'Tokens',
                headerShadowVisible: false,
                headerRight: ({canGoBack}) => {
                  const onDonePress = () => {
                    if (canGoBack) {
                      navigation.goBack();
                    } else {
                      navigation.navigate('home');
                    }
                  };
                  return (
                    <TouchableOpacity onPress={onDonePress}>
                      <Text style={ApplicationStyles.screen.rightTitle}>
                        Done
                      </Text>
                    </TouchableOpacity>
                  );
                },
              })}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
