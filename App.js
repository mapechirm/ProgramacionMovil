/* import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>wuenas jijij</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */

import { Image, ScrollView, Text } from "react-native";

const logo = {
  uri: "https://scontent.fqro3-1.fna.fbcdn.net/v/t39.30808-6/270811461_10159593443572964_311196138685309059_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=cIVBA3q6GXkAX9688pT&_nc_ht=scontent.fqro3-1.fna&oh=00_AfCMHwC_RD6_woUHS0XZclHdHUfQG5ktnFl87ag_juGowg&oe=647DF617",
  width: 64,
  height: 64,
};

const App = () => (
  <ScrollView>
    <Text style={{ fontSize: 25 }}>Logo</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 25 }}>de</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 25 }}>la</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 25 }}>universidad</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 25 }}>UPQ</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
  </ScrollView>
);

export default App;
