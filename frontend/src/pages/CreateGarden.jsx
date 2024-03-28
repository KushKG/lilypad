import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function CreateGarden() {
  const [gardenName, setGardenName] = useState('');

  const handleCreateGarden = () => {
    // Handle garden creation with gardenName
    console.log('Creating garden with name:', gardenName);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Enter garden name"
        onChangeText={text => setGardenName(text)}
        value={gardenName}
      />
      <Button title="Create Garden" onPress={handleCreateGarden} />
    </View>
  );
}
