// import React, { useState, useEffect, useContext } from 'react';
// import { Text, View, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
// import { delete_garden, get_gardens } from '../controllers/firebase_controller';
// import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { GardenProvider } from '../components/GardenContext';
// import GardenContext from '../components/GardenContext';

// export default function Gardens({ navigation }) {
//   const { gardens } = useContext(GardenContext)

//   const navigateToNewPage = () => {
//     navigation.navigate('Create Garden');
//   };

//   const navigateToGarden = (index) => {
//     navigation.navigate('Garden View', {"index": index});
//   };

//   const deleteGarden = (index) => {
//     Alert.alert(
//       "Confirm Deletion",
//       "Are you sure you want to delete this garden?",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         },
//         {
//           text: "Delete",
//           onPress: () => {
//             delete_garden(gardens[index].id, null)
//             console.log("Delete Pressed");
//           },
//           style: "destructive"
//         }
//       ]
//     );
//   };

//   return (
//       <View style={styles.container}>
//         {gardens.map((garden, index) => (
//           <View key={garden.id} style={styles.gardenContainer}>
//             <TouchableOpacity onPress={() => navigateToGarden(index)} style={styles.garden}>
//               <Text style={styles.text}>{garden.name}</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => deleteGarden(index)} style={styles.deleteButton}>
//               <Text style={styles.deleteText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//         <Button title={"Add Garden"} onPress={navigateToNewPage}>click me</Button>
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   gardenContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   garden: {
//     backgroundColor: '#e0e0e0',
//     padding: 20,
//     borderRadius: 8,
//     width: '80%',
//     alignItems: 'center',
//   },
//   deleteButton: {
//     backgroundColor: '#C70000',
//     padding: 10,
//     borderRadius: 8,
//     marginRight: 10
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   deleteText: {
//     fontSize: 16,
//     color: 'white',
//   },
// });

import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { delete_garden, get_gardens } from '../controllers/firebase_controller';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GardenProvider } from '../components/GardenContext';
import GardenContext from '../components/GardenContext';

export default function Gardens({ navigation }) {
  const { gardens } = useContext(GardenContext);
  const [editingMode, setEditingMode] = useState(false);

  const toggleEditingMode = () => {
    setEditingMode(!editingMode);
  };

  const navigateToNewPage = () => {
    navigation.navigate('Create Garden');
  };

  const navigateToGarden = (index) => {
    navigation.navigate('Garden View', { "index": index });
  };

  const deleteGarden = (index) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this garden?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            delete_garden(gardens[index].id, null)
            console.log("Delete Pressed");
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Button title={editingMode ? "Done Editing" : "Edit"} onPress={toggleEditingMode} />
      {gardens.map((garden, index) => (
        <View key={garden.id} style={[styles.gardenContainer, editingMode && styles.editMode]}>
          <TouchableOpacity onPress={() => navigateToGarden(index)} style={styles.garden}>
            <Text style={styles.text}>{garden.name}</Text>
          </TouchableOpacity>
          {editingMode &&
            <TouchableOpacity onPress={() => deleteGarden(index)} style={[styles.deleteButton, { height: 50 }]}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          }
        </View>
      ))}
      <Button title={"Add Garden"} onPress={navigateToNewPage}>click me</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gardenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%', // Extend to full width by default
  },
  garden: {
    backgroundColor: '#e0e0e0',
    padding: 14,
    flex: 1, // Expand to fill available space
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#C70000',
    padding: 14,
    height: '100%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteText: {
    fontSize: 16,
    color: 'white',
  },
});