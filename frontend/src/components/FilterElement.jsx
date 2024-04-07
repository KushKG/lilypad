import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FilterElement({ title, iconName, selectedIndex, setSelectedIndex, accentColor}) {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => setSelectedIndex(0)}>
                    <View style={styles.iconTextContainer}>
                        <Ionicons
                            size={18}
                            name={iconName}
                            color={selectedIndex.includes(0) ? accentColor : "gray"}
                        />
                        {/* <Text
                            style={[
                                styles.iconText,
                                selectedIndex === 0
                                    ? { color: "black" }
                                    : { color: "gray" },
                            ]}
                        >
                            Low
                        </Text> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedIndex(1)}>
                    <View style={styles.iconTextContainer}>
                        <Ionicons
                            size={26}
                            name={iconName}
                            color={selectedIndex.includes(1) ? accentColor : "gray"}
                        />
                        {/* <Text
                            style={[
                                styles.iconText,
                                selectedIndex === 1
                                    ? { color: "black" }
                                    : { color: "gray" },
                            ]}
                        >
                            Medium
                        </Text> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedIndex(2)}>
                    <View style={styles.iconTextContainer}>
                        <Ionicons
                            size={34}
                            name={iconName}
                            color={selectedIndex.includes(2) ? accentColor : "gray"}
                        />
                        {/* <Text
                            style={[
                                styles.iconText,
                                selectedIndex === 2
                                    ? { color: "black" }
                                    : { color: "gray" },
                            ]}
                        >
                            High
                        </Text> */}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 12,
        marginTop: 10,
        fontSize: 18,
        marginLeft: 20,
        // textDecorationLine: 'underline'
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
    },
    iconTextContainer: {
        alignItems: "center",
    },
    iconText: {
        marginTop: 5,
        textAlign: "center",
        // color: "gray"
    },
})