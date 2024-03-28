import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { search } from './src/controllers/data_controller';
import PlantListView from './src/components/PlantListView';
import { get_gardens } from './src/controllers/firebase_controller';
import { useEffect, useState } from 'react';
import Gardens from './src/pages/Gardens';
import Search from './src/pages/Search';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import * as React from 'react';



export default function App() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: Gardens,
    second: Search,
  });
  

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#50382A',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  indicator: {
    backgroundColor: 'white',
  },
});
