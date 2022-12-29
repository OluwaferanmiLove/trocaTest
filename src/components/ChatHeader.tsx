import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackIcon from '../assets/icons/BackIcon';
import CallIcon from '../assets/icons/CallIcon';
import VideoCallIcon from '../assets/icons/VideoCallIcon';
import { hp, wp } from '../utils/responsive-dimension';

function ChatHeader() {
  return (
    <View style={styles.main}>
      <TouchableOpacity activeOpacity={0.8}>
        <BackIcon />
      </TouchableOpacity>
      <View style={styles.userInfoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/women/59.jpg'}}
            style={styles.image} />
        </View>
        <View style={{marginHorizontal: wp(16)}}>
          <Text style={styles.userName}>Bob</Text>
          <Text style={styles.lastSeenText}>Today at 10:30am</Text>
        </View>
      </View>
      <View style={styles.callContainer}>
        <TouchableOpacity activeOpacity={0.8}>
          <VideoCallIcon />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <CallIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E9E000',
    paddingHorizontal: wp(24),
    paddingVertical: hp(10),
  },
  userInfoContainer: {
    flex: 1,
    marginHorizontal: wp(16),
    flexDirection: 'row',
  },
  userName: {
    fontSize: wp(18),
    fontWeight: '600',
    color: '#000000',
  },
  lastSeenText: {
    fontSize: wp(14),
    marginTop: hp(8),
    // fontWeight: '600',
    color: '#444444',
  },
  imageContainer: {
    height: hp(32),
    width: wp(32),
    borderRadius: wp(100),
    backgroundColor: '#f4f4f4',
    overflow: 'hidden',
  },
  image: {
    height: hp(32),
    width: wp(32),
    borderRadius: wp(100),
  },
  callContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default  ChatHeader;
