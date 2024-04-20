import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Button,
    Modal,
    ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getPlantDetailsByName } from "../controllers/data_controller";
import chroma from "chroma-js";
import MoreInfoModal from "./MoreInfoModal";

export default function PlantListView({ data, actionElement, deletePlant }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [details, setDetails] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [lilypadModal, showLilypadInfoModal] = useState(false);

    const waterConversions = [
        <Ionicons key={1} size={18} name={"water"} color="#87CEEB" />,
        <Ionicons key={2} size={18} name={"water"} color="#87CEEB" />,
        <Ionicons key={3} size={18} name={"water"} color="#87CEEB" />,
    ];

    const heatConversions = [
        <Ionicons key={1} size={18} name={"sunny"} color="orange" />,
        <Ionicons key={2} size={18} name={"sunny"} color="orange" />,
        <Ionicons key={3} size={18} name={"sunny"} color="orange" />,
    ];

    const conversions = [
        'Low', 'Medium', 'High'
    ]

    const getIcons = (array, num) => {
        icons = [];
        for (let i = 0; i <= num; i++) {
            icons.push(array[i]);
        }
        return icons;
    };

    const toggleExpand = async () => {
        setIsExpanded(!isExpanded);
        if (!details) {
            setLoading(true);
            const response = await getPlantDetailsByName(data.Name);
            setDetails(response);
            setLoading(false);
        }
    };

    const handleDeletePlant = () => {
        console.log(data.Name);
        deletePlant(data.Name);
    };

    const getColorForLilypadScore = (score) => {
        const scale = chroma.scale(["red", "yellow", "green"]).domain([0, 1]); // Red to green scale
        return scale(score).hex();
    };

    return (
        <TouchableOpacity
            onPress={toggleExpand}
            style={[styles.container, isExpanded && styles.expandedContainer]}
            activeOpacity={1}
        >
            <View style={styles.row}>
                <Image source={{ uri: data.Image }} style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{data.Name}</Text>
                    <Ionicons
                        name={isExpanded ? "chevron-up" : "chevron-down"}
                        size={24}
                        color="black"
                    />
                    <TouchableOpacity onPress={() => setShowModal(true)}>
                        <Ionicons
                            name="information-circle-outline"
                            size={24}
                            paddingHorizontal={4}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.actionContainer}>{actionElement}</View>
            </View>
            {isExpanded && (
                <View>
                    {loading ? (
                        <ActivityIndicator size="medium" />
                    ) : (
                        <View>
                            <View style={styles.detailsContainer}>
                                <View style={styles.column}>
                                    <Text style={styles.label}>Schedule:</Text>
                                    <View style={styles.row}>
                                        <Text>Heat Tolerance:</Text>
                                        {getIcons(
                                            heatConversions,
                                            details["Heat Tolerance"]
                                        )}
                                    </View>
                                    <View style={styles.row}>
                                        <Text>Water Requirements:</Text>
                                        {getIcons(
                                            waterConversions,
                                            details["Water Requirements"]
                                        )}
                                    </View>
                                </View>
                                <View style={styles.column}>
                                    <Text style={styles.label}>
                                        Lilypad Score:
                                    </Text>
                                        <View
                                            style={[
                                                styles.circle,
                                                {
                                                    backgroundColor:
                                                        getColorForLilypadScore(
                                                            details["Lilypad"]
                                                        ),
                                                },
                                            ]}
                                        >
                                            <Text style={styles.scoreText}>
                                                {(
                                                    details["Lilypad"] * 100
                                                ).toFixed(0)}
                                            </Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                onPress={() =>
                                                    showLilypadInfoModal(true)
                                                }
                                            >
                                                <Text style={styles.whatText}>what is this?</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            </View>
                            {deletePlant != null ? (
                                <Button
                                    title="Delete Plant"
                                    onPress={handleDeletePlant}
                                    color="red"
                                />
                            ) : (
                                <></>
                            )}
                        </View>
                    )}
                </View>
            )}
            <MoreInfoModal
                showModal={showModal}
                setShowModal={setShowModal}
                data={data}
            />
            <Modal
                transparent={false} // Set to false to have a solid background
                visible={lilypadModal}
                animationType="slide"
                onRequestClose={() => showLilypadInfoModal(false)}
            >
                <View style={styles.lilypadInfoModalContainer}>
                    <View style={styles.lilypadInfoModalContent}>
                        <Text>
                            The LilyPad Score® is our way of calculating exactly
                            how good a plant is for your region. Using our
                            algorithm we rate plants from 1 to 100, 1 being
                            terrible and 100 being amazing
                        </Text>
                        <Button
                            onPress={() => showLilypadInfoModal(false)}
                            title="Close"
                        />
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    lilypadInfoModalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", // Solid white background
    },
    lilypadInfoModalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%", // Adjust width as needed
        maxHeight: "70%", // Adjust maximum height as needed
    },
    infoLilypad: {
        position: "absolute",
        top: 0,
        right: 40,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    whatText: {
        color: 'gray'
    },
    label: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        flex: 1,
        fontSize: 21,
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 5,
    },
    actionContainer: {
        marginRight: 0,
        width: 40,
        height: 40,
    },
    detailsContainer: {
        marginTop: 15,
        marginLeft: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        borderWidth: 1,
    },
    expandedContainer: {
        marginBottom: 0, // Adjust as needed
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    scoreText: {
        color: "black",
    },
});
