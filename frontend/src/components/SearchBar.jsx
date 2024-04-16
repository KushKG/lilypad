import React, { useContext, useEffect, useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Text,
    FlatList,
    Button,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
    fetchPlants,
    getPlantDetails,
    search,
} from "../controllers/data_controller";
import PlantListView from "./PlantListView";
import { add_plant, delete_plant } from "../controllers/firebase_controller";
import GardenContext from "./GardenContext";
import AddPlantModal from "./AddPlantModal";
import SearchFilterModal from "./SearchFilterModal";

const SearchBar = ({ gardenId }) => {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [currentPlant, setCurrentPlant] = useState({});
    const [loading, setLoading] = useState(false);
    const [foundResults, setFoundResults] = useState(true);

    const { gardens } = useContext(GardenContext);

    const handleSearch = async (filters = {}) => {
        setLoading(true);
        const results = await fetchPlants(searchText, filters);
        setSearchResults(results);
        setFoundResults(results.length != 0);
        setLoading(false);
    };

    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <PlantListView
                actionElement={
                    <ActionButton item={item} onPress={() => addToGarden(item)} />
                }
                data={item}
            ></PlantListView>
        </View>
    );

    const addToGarden = (item) => {
        if (gardenId == null) {
            setCurrentPlant(item);
            setAddModalVisible(true);
        } else {
            saveToGarden(null, item)
        }
    };

    const saveToGarden = (garden, item) => {
        let temp = null
        if (item != null) {
            temp = item
        } else {
            temp = currentPlant
        }
        if (garden) {
            add_plant(garden.id, temp.Name);
        } else {
            console.log(gardenId);
            console.log("^ in search bar");
            add_plant(gardenId, temp.Name);
        }
    };

    const updateResults = (filters) => {
        handleSearch(filters);
    };

    const ActionButton = ({ onPress, item }) => {
        if (gardenId == null) {
            return (
                <TouchableOpacity onPress={onPress} style={styles.actionButton}>
                    <Ionicons name="add" size={24} color="white" />
                </TouchableOpacity>
            );
        } else {
            let garden = null
            let added = false
            for (const temp of gardens) {
                if (temp.id == gardenId) {
                    garden = temp
                }
            }
            if (garden != null) {
                if (garden.plants.includes(item.Name)) {
                    added = true
                }
            }
            if (added) {
                onPress = () => delete_plant(gardenId, item.Name)
            }
            return (
                <TouchableOpacity onPress={onPress} style={[styles.actionButton, {backgroundColor: added ? '#656565' : 'green'}]}>
                    <Ionicons name={added ? "checkmark" : "add"} size={24} color={"white"} />
                </TouchableOpacity>
            );
        }
    };

    return (
        <View
            style={{
                flex: 1,
                paddingTop: 60,
                paddingLeft: 10,
                paddingRight: 10,
            }}
        >
            <View style={styles.searchContainer}>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: "gray",
                        borderWidth: 1,
                        marginBottom: 10,
                        padding: 5,
                        borderRadius: 20,
                        flex: 1,
                        paddingLeft: 10,
                        marginLeft: 10,
                    }}
                    onChangeText={(text) => setSearchText(text)}
                    onSubmitEditing={() => handleSearch()}
                    value={searchText}
                    placeholder="Search..."
                />
                <TouchableOpacity onPress={() => handleSearch()}>
                    <Ionicons
                        name="search"
                        size={24}
                        color="black"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilterModalVisible(true)}>
                    <Ionicons
                        name="filter"
                        size={24}
                        color="black"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            <SafeAreaView style={{ flex: 1 }}>
                {loading ? (
                    <ActivityIndicator />
                ) : !foundResults ? (
                    <View style={styles.noResultsContainer}>
                        <Text style={styles.noResults}>
                            No results found :(
                        </Text>
                    </View>
                ) : (
                    <FlatList
                        data={searchResults}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                )}
            </SafeAreaView>
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
                updateResults={updateResults}
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'green'
    },
    bar: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        maxHeight: 200,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginLeft: 10,
    },
    noResults: {
        textAlign: "center",
        fontSize: 24,
    },
    noResultsContainer: {
        marginTop: 20,
    },
});
