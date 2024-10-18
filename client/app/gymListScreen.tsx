import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import axios from "axios";
import GymCard from "../components/GymCard";

const GymListScreen = () => {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/gyms")
      .then((response) => setGyms(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {gyms.map((gym) => (
        <GymCard key={gym.id} gym={gym} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default GymListScreen;
