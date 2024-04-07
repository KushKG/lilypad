import React, { useEffect, useState } from "react";
import {
    Modal,
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icons
import FilterElement from "./FilterElement";

export default function SearchFilterModal({ modalVisible, setModalVisible, updateResults }) {
    const [sunSelections, setSunSelections] = useState([]);
    const [waterSelections, setWaterSelections] = useState([]);
    const [pestSelections, setPestSelections] = useState([]);
    const [fertilizerSelections, setFertilizerSelections] = useState([]);
    const [soilSelections, setSoilSelections] = useState([]);
    const [filters, setFilters] = useState({});


    const handlePress = (val, stateFunc, name) => {
        stateFunc((prev) => {
            arr = []
            if (prev.includes(val)) {
                arr = prev.filter(item => item !== val)
            } else {
                arr = [...prev, val]
            }
            setFilters(prev => {
              return {
                ...prev,
                [name]: arr
              }
            })
            return arr
        });
    };

    const clear = () => {
      setSunSelections([])
      setWaterSelections([])
      setPestSelections([])
      setFertilizerSelections([])
      setSoilSelections([])
      setFilters({})
      setModalVisible(false)
    }

    const update = () => {
      updateResults(filters)
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
                        onPress={clear}
                    >
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.spacer}></View>
                    {/* <Text style={styles.titleText}>Filters (Low, Medium, High)</Text> */}
                    <FilterElement
                        title="Heat Tolerance"
                        iconName="thermometer-outline"
                        selectedIndex={sunSelections}
                        setSelectedIndex={(index) => handlePress(index, setSunSelections, "Heat Tolerance")}
                        accentColor="red"
                    />
                    <View style={styles.betweenSpacer}></View>
                    <FilterElement
                        title="Water Requirements"
                        iconName="water-outline"
                        selectedIndex={waterSelections}
                        setSelectedIndex={(index) => handlePress(index, setWaterSelections, "Water Requirements")}
                        accentColor="#87CEEB"
                    />
                    <View style={styles.betweenSpacer}></View>
                    <FilterElement
                        title="Pest Tolerance"
                        iconName="bug-outline"
                        selectedIndex={pestSelections}
                        setSelectedIndex={(index) => handlePress(index, setPestSelections, "Pest Tolerance")}
                        accentColor="#8a6240"
                    />
                    <View style={styles.betweenSpacer}></View>
                    <FilterElement
                        title="Fertilizer Requirements"
                        iconName="storefront-outline"
                        selectedIndex={fertilizerSelections}
                        setSelectedIndex={(index) => handlePress(index, setFertilizerSelections, "Fertility Requirements")}
                        accentColor="brown"
                    />                        
                    <View style={styles.betweenSpacer}></View>
                       <FilterElement
                        title="Soil Requirements"
                        iconName="earth-outline"
                        selectedIndex={soilSelections}
                        setSelectedIndex={(index) => handlePress(index, setSoilSelections, "Soil Requirements")}
                        accentColor="#9fc164"
                    />          
      
                    <View style={styles.spacer}></View>
                    <Button onPress={update} title="Update Results" />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    spacer: {
      height: 20
    },
    betweenSpacer: {
      height: 12
    },
    titleText: {
      textAlign: 'center',
      fontSize: 22,
      marginTop: 20,
      marginBottom: 10,
      textDecorationLine: 'underline'
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        width: "80%",
    },
    closeButton: {
        position: "absolute",
        top: 10,
        right: 10,
        padding: 5,
    },
});
