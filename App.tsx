import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GluestackUIProvider, Center, Text, Box, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { SafeAreaView } from '@gluestack-ui/themed';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreensParams } from './types';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyScreen from './screens/MyScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import WebtoonDetail from './screens/WebtoonDetail';
import DetailHeader from './components/Header/DetailHeader';

const Stack= createStackNavigator<ScreensParams>();
const queryClient= new QueryClient();
//bottom tab
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor:'white',
        tabBarActiveBackgroundColor: '#171717',
        tabBarInactiveBackgroundColor: '#171717',}} >
      <Tab.Screen name='Home'
        component={HomeScreen}
        options={{tabBarIcon: ({color, size})=> <Ionicons name='list' size={size} color={color} />,}}/>
      <Tab.Screen name='My'
        component={MyScreen}
        options={{tabBarIcon: ({color, size})=> <Ionicons name='happy' size={size} color={color} />,}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
          <SafeAreaView flex={1} bg='$backgroundark950'>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Main' component={Tabs} />
                <Stack.Screen name='Search' component={SearchScreen} />
                <Stack.Screen name='Detail' component={WebtoonDetail} options={{headerShown:true, header:()=><DetailHeader/>}}/>
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
      </GluestackUIProvider>
    </QueryClientProvider>
    
  );
}