import React from "react";
import { connect } from "react-redux";

import { 
  Text, 
  View, 
  FlatList, 
  StyleSheet,
  Image } from 'react-native';
  
import { fetchPhotosData } from "../../store/reducers/photosActions";
import { photoDialog } from './PhotoDialog'

const renderItem = ({ item }) => {
  return (
    <Image style={[ styles.imageView ]} 
    source={{
      uri: item.thumbnailUrl,
      headers: {
        'User-Agent': 'your-user-agent'
      }
    }} 
    //onClick={photoDialog(item)}
    /> 
  );
}

class PhotosList extends React.Component {
  
  componentDidMount() {
    if(this.props.photosList.length == 0)
      {this.props.dispatch(fetchPhotosData());}
  }

  render() {
    const { error, loading, photosList } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {loading && <Text>Loading...</Text>}
        {photosList && (
          <View>
            <Text style={[ styles.sectionTitle ]} >
                Photos List
              </Text>
              <FlatList
                numColumns={4}
                data={photosList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
          </View>)}
        {error && <Text>Error while fetching data</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  photosList: state.photosListReducer.photosList,
  loading: state.photosListReducer.photosLoading,
  error: state.photosListReducer.photosError
});

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  imageView: {
    marginTop: 8,
    marginHorizontal: 4,
    height: 90,
    width: 90
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps)(PhotosList);