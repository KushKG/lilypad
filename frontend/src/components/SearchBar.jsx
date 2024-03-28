import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { search } from "../controllers/data_controller";
import PlantListView from "./PlantListView";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = search("Berr", {});
    setSearchResults(results);
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <PlantListView data={item}></PlantListView>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 40 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
        }}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        placeholder="Search..."
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index
        }}
      />
    </View>
  );
};

export default SearchBar;
