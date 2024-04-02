import React, { useContext, useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Modal, Text, ScrollView, FlatList, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { fetchPlants, getPlantDetails } from "../controllers/data_controller";
import PlantListView from "./PlantListView";
import { add_plant } from "../controllers/firebase_controller";
import { get_gardens } from "../controllers/firebase_controller";
import GardenContext from "./GardenContext";

const SearchBar = ({ gardenId }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1); 
  const [currentPlant, setCurrentPlant] = useState({});
  const { gardens } = useContext(GardenContext)

  const handleSearch = async () => {
    const results = await fetchPlants(searchText, {});
    // const other = await getPlantDetails(results[0].id)
    // console.log(other)
    // console.log(results)
    setSearchResults(results);
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <PlantListView actionElement={<ActionButton onPress={() => addToGarden(item)}/>} data={item}></PlantListView>
    </View>
  );

  const addToGarden = item => {
    setCurrentPlant(item)
    console.log(item)
    setModalVisible(true);
  };

  const saveToGarden = (garden) => {
    if (garden) {
      add_plant(garden.id, currentPlant)
    } else {      
      
      add_plant(gardenId, currentPlant)
    }
  }

  const ActionButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.actionButton}>
      <Ionicons name="add" size={24} color="white" />
    </TouchableOpacity>
  );

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: 60, paddingLeft: 10, paddingRight: 10 }}>
      <View style={styles.searchContainer}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
            padding: 5,
            flex: 1,
          }}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          placeholder="Search..."
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      
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
              <TouchableOpacity onPress={decreaseQuantity}>
                <Ionicons name="remove" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity}>
                <Ionicons name="add" size={24} color="black" />
              </TouchableOpacity>
            </View>
            {/* Conditional rendering based on gardenId */}
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
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  actionButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginLeft: 10,
  },
});
