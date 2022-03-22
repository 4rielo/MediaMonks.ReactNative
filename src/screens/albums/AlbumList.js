import React from "react";
import { connect } from "react-redux";

import { 
  Text, 
  View, 
  FlatList, 
  StyleSheet } from 'react-native'

  import { fetchAlbumsData } from "../../store/reducers/albumsActions";

const renderItem = ({ item }) => {
  return (
    <Text style={[ styles.sectionDescription ]}> 
      {item.title}
    </Text>
  );
}

class AlbumsList extends React.Component {
  componentDidMount() {
    if(this.props.albumsList.length == 0)
      {this.props.dispatch(fetchAlbumsData());}
  }

  render() {
    const { error, loading, albumsList } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {loading && <Text>Loading...</Text>}
        {albumsList && (
          <View>
            <Text style={[ styles.sectionTitle ]} >
              Albums List
            </Text>
            
            <FlatList
              data={albumsList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
            
          </View> )}
        {error && <Text>Error while fetching data</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albumsList: state.albumsListReducer.albumsList,
  loading: state.albumsListReducer.albumsLoading,
  error: state.albumsListReducer.albumsError
});

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default connect(mapStateToProps)(AlbumsList);