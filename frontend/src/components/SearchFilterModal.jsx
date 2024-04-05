import React, { useEffect, useState } from 'react';
import { Modal, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icons
import DropDownPicker from 'react-native-dropdown-picker';
import { getZoneFilters } from '../controllers/data_controller';

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
    ],
  };

  const [filters, setFilters] = useState({});
  const [light, setLight] = useState(data.light[0].value);
  const [lightOpen, setLightOpen] = useState(false)
  const [zone, setZone] = useState(data.soil_texture[0].value);
  const [zoneOpen, setZoneOpen] = useState(false)

  const updateFilter = () => {
    setFilters({
      light: light,
      zone_id: zone
    })
    setModalVisible(false)
  }

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
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.text}>Light</Text>
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

          <Text style={styles.text}>Zone</Text>

          <Button onPress={updateFilter} title="Update Results" />
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
    width: '80%'
  },
  dropdownContainer: {
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    zIndex: 100
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  text: {
    marginBottom: 5,
    marginTop: 10
  }
});
