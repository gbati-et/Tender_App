import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import OTPVerification from './screens/OTPVerification';
import HomeScreen from './screens/HomeScreen';
import BottomTabNav from './navigation/BottomTabNav';
import ResetPassword from './screens/ResetPassword';
import Signup2 from './screens/Signup2'
import Forgotpassword from './screens/Forgotpassword';

const Stack = createNativeStackNavigator();


function App() {

  return (
    
      <NavigationContainer >
       <Stack.Navigator
        initialRouteName='Welcome'
        options={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNav}
          options={{
            headerShown: false
          }}
        />
      {/*<Stack.Navigator screenOptions={{ headerShown: false }}>*/}
        <Stack.Screen name="Welcome" component={Welcome}  options={{
            headerShown: false
          }} />
        <Stack.Screen name="Signup" component={Signup}  options={{
            headerShown: false
          }}/>
        <Stack.Screen name="Login" component={Login}  options={{
            headerShown: false
          }} />
        <Stack.Screen name="OTPVerification" component={OTPVerification}  options={{
            headerShown: false
          }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{
            headerShown: false
          }}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword}  options={{
            headerShown: false
          }}/>
          <Stack.Screen name="Signup2" component={Signup2}  options={{
            headerShown: false
          }}/>
          <Stack.Screen name="Forgotpassword" component={Forgotpassword}  options={{
            headerShown: false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;