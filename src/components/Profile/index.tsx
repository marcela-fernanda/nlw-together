import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/marcela-fernanda.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Marcela</Text>
        </View>
        <Text style={styles.message}>Hojé é dia de vitória</Text>
      </View>
    </View>
  );
}
