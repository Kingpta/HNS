import React from "react";
import Users from "./shared/pages/Users";
import Firstgate from "./shared/component/Firstgate";
import DetailsPage from "./shared/pages/DetailsPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesProvider } from "./shared/component/FavouriteContext";
import { AppointmentProvider } from "./shared/component/AppointmentContext";
import FavoritePage from "./shared/component/FavoritePage";
import AppointmentsPage from "./shared/pages/AppointmentsPage";
import AgentHomepage from "./agents/Pages/AgentHomepage";
import AgentListingPage from "./agents/Pages/AgentListingPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <FavoritesProvider>
        <AppointmentProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Users" component={Users} />
              <Stack.Screen name="DetailsPage" component={DetailsPage} />
              <Stack.Screen name="FavoritePage" component={FavoritePage} />
              <Stack.Screen name="AppointmentsPage" component={AppointmentsPage} />
              <Stack.Screen name="agentPage" component={AgentHomepage} />
              <Stack.Screen name="agentListingsPage" component={AgentListingPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </AppointmentProvider>
      </FavoritesProvider>
    </>
  );
};

export default App;

