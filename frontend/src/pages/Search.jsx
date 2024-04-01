import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";
import { GardenProvider } from "../components/GardenContext";


export default function Search({ route, data, dropdown_content }) {
    const [gardenId, setGardenId] = useState(route.params != null ? route.params.gardenId : null)
    console.log(gardenId)
    return (
        <GardenProvider>
            <SearchBar gardenId={gardenId}/>
        </GardenProvider>
    );
}