import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import SendMessageIcon from '../assets/icons/SendMessageIcon';
import { hp, wp } from '../utils/responsive-dimension';

function ChatInput() {
  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Type a message...'} />
      </View>
      <TouchableOpacity>
        <SendMessageIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: wp(13),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    height: hp(64),
    paddingHorizontal: wp(24),
    borderRadius: wp(8),
  },
  input: {
    paddingVertical: 0,
  }
});

export default  ChatInput;
