import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../theme/colors";

const GymCard = ({ gym }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: gym.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{gym.name}</Text>
        <Text style={styles.location}>{gym.location}</Text>
        <Text style={styles.price}>${gym.price} per day</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy Pass</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 10,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    color: colors.textPrimary,
  },
  location: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  price: {
    fontSize: 16,
    color: colors.primary,
    marginTop: 5,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    color: colors.background,
    textAlign: "center",
  },
});

export default GymCard;
