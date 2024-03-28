import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { create_garden } from '../controllers/firebase_controller';

export default function CreateGarden({ navigation }) {
  const [gardenName, setGardenName] = useState('');

  const handleCreateGarden = async () => {
    await create_garden(gardenName, [], null)
    navigation.goBack()
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
