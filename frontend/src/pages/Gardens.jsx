import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { get_gardens } from '../controllers/firebase_controller';

export default function Gardens() {
  const [gardens, setGardens] = useState([]);

  useEffect(() => {
    const fetchGardens = async () => {
      const temp_gardens = await get_gardens();
      setGardens(temp_gardens);
    };
    fetchGardens();
  }, []);

  return (
    <View style={styles.container}>
      {gardens.map(garden => (
        <Text key={garden.id}>{garden.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
