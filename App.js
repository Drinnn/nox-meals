import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./navigation/Navigator";
import { enableScreens } from "react-native-screens";

enableScreens();

const fetchFonts = async () => {
  await Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );

  return <Navigator />;
}
