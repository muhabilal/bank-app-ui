import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/sections/Header';
import Card from './src/sections/Card';
import Transactions from './src/sections/Transactions';
import { useColorScheme } from 'nativewind';
import { useFonts } from 'expo-font';
export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskSemiBold: require("./src/font/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("./src/font/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskMedium: require("./src/font/SpaceGrotesk-Medium.ttf"),
  });
  return (
    <SafeAreaView className="p-6 dark:bg-neutral-900">
      <StatusBar style='auto' />
      <View>
        <View className="my-6">
          <Header />

          <Card />


          <Transactions />
        </View>
      </View>
    </SafeAreaView>
  );
}