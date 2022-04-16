import React, {FC, useCallback, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '@app/Navigation/AppNavigation';

import styles from '@app/Screens/Welcome/Welcome.styles';
import {Screen} from '@app/Components/Screen/Screen';
import IMAGE from '@app/Images';
import {TextField, Button} from '@app/Components';

export const WelcomeScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'welcome'>
> = ({navigation}) => {
  const [password, setPassword] = useState<string>('');

  const onUnlockClick = useCallback(() => {
    navigation.navigate('home');
  }, [navigation]);

  return (
    <Screen style={styles.container} preset="scroll">
      <View style={styles.subContainer}>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerWrapper}>
            <Image
              source={IMAGE.WELCOME_BANNER}
              resizeMode="cover"
              style={styles.banner}
            />
            <Image source={IMAGE.BLUE_LOGO} resizeMode="contain" />
          </View>
          <Text style={styles.title}>Ronin Wallet</Text>
          <Text style={styles.description}>Your Digital Passport</Text>
        </View>
        <View>
          <TextField
            value={password}
            onChangeText={value => setPassword(value)}
            label="enter password"
            secureTextEntry
          />
          <Button
            label="Unlock"
            style={styles.button}
            disabled={!password}
            onPress={onUnlockClick}>
            Unlock
          </Button>
        </View>
      </View>
    </Screen>
  );
};
