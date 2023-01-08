import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import CloseIcon from './closeicon/closeicon';

const Item = ({ title, id, removeItem }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <CloseIcon color={'grey'} removeItem={() => removeItem(id)}/>
  </View>
);

const Notifications = () => {
    const [DATA, setDATA] = useState([])
    const removeItem = (id) => {
        const d1 = DATA.filter(item => item.id !== id);
        setDATA([...d1])
    }
  useEffect(() => {

    const DATA = []
    for (let i=0; i< 50; i++) {
        DATA.push({
            id: i,
            title: `Item ${i+1}`
        })
    }
    setDATA([...DATA])
  }, []);

  if (!DATA.length) {
      <Text>Loading..</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} id={item.id} removeItem={removeItem}/>}
        keyExtractor={item => item?.id}
        getItemCount={() => DATA.length}
        getItem={(data, index) => data[index]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    position: 'relative',
    backgroundColor: 'lightgrey',
    minWidth: '90%',
    maxWidth: '90%',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    wordBreak: 'break-word'
  },
  title: {
    fontSize: 32,
  },
});

export default Notifications;