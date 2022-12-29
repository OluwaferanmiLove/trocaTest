import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ChatHeader from '../components/ChatHeader';
import ChatInput from '../components/ChatInput';

function Chat() {
  return (
    <SafeAreaView style={styles.main}>
      {/* <StatusBar style="auto" /> */}
      <ChatHeader />
      <ScrollView style={styles.messageContainer}></ScrollView>
      <ChatInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageContainer: {
    flex: 1,
  }
});

export default  Chat;
