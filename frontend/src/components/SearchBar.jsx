import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // const filteredResults = dummyData.filter((item) =>
    //   item.toLowerCase().includes(searchText.toLowerCase())
    // );
    // setSearchResults(filteredResults);
  };

  const renderItem = ({ item }) => <Text style={{ padding: 10 }}>{item}</Text>;

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
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SearchBar;

