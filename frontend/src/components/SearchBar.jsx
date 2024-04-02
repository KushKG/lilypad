import React, { useContext, useEffect, useState } from "react";
import {
    View,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { search } from "../controllers/data_controller";
import PlantListView from "./PlantListView";
import { add_plant } from "../controllers/firebase_controller";
import GardenContext from "./GardenContext";
import AddPlantModal from "./AddPlantModal";
import SearchFilterModal from "./SearchFilterModal";

const SearchBar = ({ gardenId }) => {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [currentPlant, setCurrentPlant] = useState({});
    const { gardens } = useContext(GardenContext);

    const handleSearch = () => {
        const results = search("Berr", {});
        setSearchResults(results);
    };

    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <PlantListView
                actionElement={
                    <ActionButton onPress={() => addToGarden(item)} />
                }
                data={item}
            ></PlantListView>
        </View>
    );

    const addToGarden = (item) => {
        setCurrentPlant(item);
        setAddModalVisible(true);
    };

    const saveToGarden = (quantity, garden) => {
        if (garden) {
            add_plant(garden.id, currentPlant);
        } else {
            add_plant(gardenId, currentPlant);
        }
    };

    const ActionButton = ({ onPress }) => (
        <TouchableOpacity onPress={onPress} style={styles.actionButton}>
            <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, padding: 40 }}>
            <TextInput
                style={styles.bar}
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
                placeholder="Search..."
            />
            <Button title="Search" onPress={handleSearch} />
            <TouchableOpacity onPress={() => setFilterModalVisible(!filterModalVisible)}>
                <Ionicons name="filter" size={24} color="black" />
            </TouchableOpacity>
            <FlatList
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <AddPlantModal
                modalVisible={addModalVisible}
                saveToGarden={saveToGarden}
                setModalVisible={setAddModalVisible}
                gardenId={gardenId}
                gardens={gardens}
            />
            <SearchFilterModal
                modalVisible={filterModalVisible}
                setModalVisible={setFilterModalVisible}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    actionButton: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    bar: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
    },
});
