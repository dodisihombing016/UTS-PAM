import React, { Component, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

let database = [
  { indonesia: 'Mobil', english: 'Car' },
  { indonesia: 'Meja', english: 'Table' },
  { indonesia: 'Ruangan', english: 'Room' },
  { indonesia: 'Kursi', english: 'Chair' },
  { indonesia: 'Kucing', english: 'Cat' },
  { indonesia: 'Sepeda', english: 'Byscycle' },
  { indonesia: 'Pohon', english: 'Tree' },
  { indonesia: 'Gelas', english: 'Glass' },
  { indonesia: 'Lampu', english: 'Lamp' },
  { indonesia: 'Anjing', english: 'Dog' },
  { indonesia: 'Tikus', english: 'Mouse' },
  { indonesia: 'Cinta', english: 'Love' },
  { indonesia: 'Benci', english: 'Hate' },
  { indonesia: 'Buta', english: 'Blind' },
  { indonesia: 'Peta', english: 'Map' },
  { indonesia: 'Bola', english: 'Ball' },
  { indonesia: 'Kaki', english: 'Foot' },
  { indonesia: 'Menang', english: 'Win' },
  { indonesia: 'Kalah', english: 'Lose' },
  { indonesia: 'Biru', english: 'Blue' },
  { indonesia: 'Mutiara', english: 'Pearl' },
  { indonesia: 'Merah', english: 'Red' },
  { indonesia: 'Hijau', english: 'Green' },
  { indonesia: 'Ayah', english: 'Father' },
  { indonesia: 'Ibu', english: 'Mother' },
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: database
      };
  }

  search = () => {
    let data = database;

    data = data.filter(item => item.indonesia.toLocaleLowerCase().includes(this.state.text.toLocaleLowerCase()));

    this.setState({
      data: data
    })
  }
    
  render() {
    
    return ( 
      <View style={{flex: 1}}>
        <StatusBar backgroundColor = "#0288d1" barStyle = "light-content" />

        <View style={{ padding: 20, backgroundColor: '#ffff00', elevation: 1}}>
          <Text style={{ textAlign: 'center', color: '#000000', fontWeight: 'bold', fontSize: 18}}>KAMUSKITA (Sederhana)</Text> 
        </View>

        <TextInput 
          style={{height: 40, borderColor: '#9b5cff', borderWidth: 2, paddingLeft: 10, marginVertical: 20, marginHorizontal: 10, borderRadius: 10 }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder='Masukkan kata yang anda cari'
          onKeyPress={() => this.search()}
        />

        <FlatList 
          data={this.state.data}
          renderItem={({ item }) =>
            <View style={{borderWidth: 2, borderColor: '#9b5cff',  borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10 }}>
              <Text style={{fontSize: 18, fontWeight: 'bold' }}>{item.indonesia} </Text> 
              <Text style = {{fontSize: 16, marginTop: 5, paddingLeft: 5}} > {item.english} </Text> 
            </View>
          }
          keyExtractor={item => item.indonesia}
        />

      </View>
    );
  }
}

export default App;