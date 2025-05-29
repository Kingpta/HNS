import React from "react";
// import HomePage from './shared/pages/HomePage'
import Users from "./shared/pages/Users";
import Firstgate from "./shared/component/Firstgate";
import DetailsPage from "./shared/pages/DetailsPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { FavoritesProvider } from "./shared/component/FavoriteContext";
import { FavoritesProvider } from "./shared/component/FavouriteContext";
import FavoritePage from "./shared/component/FavoritePage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Users" component={Users} />
            <Stack.Screen name="DetailsPage" component={DetailsPage} />
            <Stack.Screen name="FavoritePage" component={FavoritePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </>
  );
};

export default App;
