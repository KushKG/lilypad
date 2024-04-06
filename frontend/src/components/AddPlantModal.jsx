import React from 'react'
import { StyleSheet, View, Modal, Text, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function AddPlantModal({modalVisible, saveToGarden, setModalVisible, gardenId, gardens }) {
    
    const [quantity, setQuantity] = useState(1); 

    const editQuantity = num => {
    if (quantity + num > 1) {
      setQuantity(quantity + num);
    }
  };


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
            <Text>Quantity:</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => editQuantity(1)}>
                <Ionicons name="remove" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={() => editQuantity(-1)}>
                <Ionicons name="add" size={24} color="black" />
              </TouchableOpacity>
            </View>
            {gardenId === null ? (
              <>
                <Text style={styles.dropdownTitle}>Select Garden:</Text>
                <View style={styles.dropdownContainer}>
                  {gardens.map((garden) => (
                    <TouchableOpacity
                      key={garden.id}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        saveToGarden(quantity, garden)
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
                  saveToGarden(quantity)
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
