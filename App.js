import App2 from './src/components/App2';
import Restaurant from './src/components/RestaurantScreen.js';
import Reservation from './src/components/ReservationScreen.js';
import Profil from './src/components/ProfilScreen.js'
import SeeAll from './src/components/SeeAllscreen.js'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookingPages from './src/components/BookingPage';
import SecondScroll from './src/components/SecondScroll';
import { useNavigation, useRoute } from '@react-navigation/native';
import ScrollableRestaurant from './src/components/ScrollableRestaurant';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home'
        component={App2}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name='Restaurant'
        component={Restaurant}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name='Reservation'
        component={Reservation}
        options={{ headerShown: true }}
        />
        <Stack.Screen 
        name='Profil'
        component={Profil}
        options={{ headerShown: true }}
        />
        <Stack.Screen 
        name='SeeAll'
        component={SeeAll}
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name='BookingPages'
        component={BookingPages}
        options={{ headerShown: false }}
        />
        
        

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

