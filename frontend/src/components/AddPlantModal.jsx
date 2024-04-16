import React from 'react'
import { StyleSheet, View, Modal, Text, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function AddPlantModal({modalVisible, saveToGarden, setModalVisible, gardenId, gardens }) {

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
            {gardenId === null ? (
              <>
                <Text style={styles.dropdownTitle}>Select Garden:</Text>
                <View style={styles.dropdownContainer}>
                  {gardens.map((garden) => (
                    <TouchableOpacity
                      key={garden.id}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        saveToGarden(garden)
                      }}
                      style={styles.dropdownItem}
                    >
                      <Text>{garden.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            ) : (
              <Button title="Add to Garden" onPress={() => {
                  saveToGarden()
                  setModalVisible(!modalVisible);
                }
                } />
            )}
            <Button title="Cancel" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
  )
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
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  quantityText: {
    fontSize: 18,
  },
  dropdownTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdownContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
})
