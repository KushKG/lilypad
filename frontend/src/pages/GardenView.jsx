import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function GardenView({ data }) {
  return (
    <View>
      {data.map((data) => (
        <Text key={data.id}>
          {data.name}
          {data.amount}
        </Text>
      ))}
    </View>
  );
}
