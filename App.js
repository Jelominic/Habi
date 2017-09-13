import React from 'react'
import { ListView, StyleSheet, Text, View } from 'react-native'
import Header from './Header'

export default class App extends React.Component {
  constructor() {
    super()

    const ds = new ListView.DataSource(
        { rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    }
  }

  render() {
    return (
        <ListView
            style={styles.list}
            dataSource={this.state.dataSource}
            renderHeader={Header}
            renderRow={(rowData) => <Text>{rowData}</Text>}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    borderBottomColor: 'black',
    borderWidth: 1,

  }

})
