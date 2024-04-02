import React, { useEffect, useState } from 'react';
import { Modal, View, Text, StyleSheet, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SearchFilterModal({ modalVisible, setModalVisible }) {

  const data = {
    light: [
      { label: 'None', value: 'none' },
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High', value: 'high' } 
    ],
    soil_texture: [
      { label: 'None', value: 'none' },
      { label: 'Coarse', value: 'coarse' },
      { label: 'Medium', value: 'medium' },
      { label: 'Fine', value: 'fine' }
    ]
  };

  const [lightFilter, setLightFilter] = useState('dummy1');
  const [filters, setFilters] = useState({});
  const [light, setLight] = useState(data.light[0].value);
  const [lightOpen, setLightOpen] = useState(false)
  const [soilTexture, setSoilTexture] = useState(data.soil_texture[0].value);
  const [soilTextureOpen, setSoilTextureOpen] = useState(false)

  const [dropdownInfo, setDropdownInfo] = useState({});

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>This is a Search Filter modal</Text>
          <Text>Add your filter options here</Text>

        

        <Text>Light</Text>
          <DropDownPicker 
              items={data.light}
              open={lightOpen}
              value={light}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdown}
              dropDownStyle={{ backgroundColor: '#fafafa' }}
              setOpen={setLightOpen}
              setValue={setLight}
              dropDownDirection="TOP"
            />

        <Text>Soil Texture</Text>
          <DropDownPicker 
              items={data.soil_texture}
              open={soilTextureOpen}
              value={soilTexture}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdown}
              dropDownStyle={{ backgroundColor: '#fafafa' }}
              setOpen={setSoilTextureOpen}
              setValue={setSoilTexture}
            />

          {/* Add similar DropDownPicker components for other filters */}

          <Button onPress={() => setModalVisible(false)} title="Update Results"></Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '80%',
  },
  dropdownContainer: {
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    zIndex: 100
  },
});
