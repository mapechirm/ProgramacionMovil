import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    padding: 24,
  },
});

export default function FontTest() {
  const fonts = [
    ["Montserrat", 24],
    ["Inter", 18],
    ["Barlow", 20],
    ["Poppins", 14],
  ];

  return (
    <View style={styles.container}>
      {fonts.map(([family, size]) => (
        <TextSize key={family} family={family} size={size} />
      ))}
    </View>
  );
}

function TextSize({ size, family }) {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Barlow: require("./assets/fonts/Barlow.ttf"),
    Poppins: require("./assets/fonts/Poppins.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: size, fontFamily: family }}>
        Texto de prueba
      </Text>
      <Text
        style={{
          fontSize: size / ((1 + Math.sqrt(5)) / 2),
          fontFamily: family,
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis
        reiciendis, consequatur doloremque qui itaque ad eum, dolorem quis
        delectus quasi eius magnam deserunt laborum expedita obcaecati! Beatae
        incidunt pariatur voluptate ad molestias officia, qui nemo suscipit
        cumque accusantium totam.
      </Text>
    </View>
  );
}
