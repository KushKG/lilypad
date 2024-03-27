import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { search } from './src/controllers/data_controller';
import PlantListView from './src/components/PlantListView';

export default function App() {
  console.log(search('example', {}))
  
  return (
    <View style={styles.container}>
      {search('example', {}).map((data, index) => {
        return <PlantListView data={data} key={index} />
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

