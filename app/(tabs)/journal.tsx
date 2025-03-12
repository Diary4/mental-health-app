import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Plus } from 'lucide-react-native';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Animated from 'react-native-reanimated';
import {FadeIn, FadeOut} from 'react-native-reanimated';

export default function ExploreScreen() {

  const { colors, isDark } = useTheme();
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: 'March 12, 2024',
      title: 'A productive day',
      content: 'Today was really productive. I managed to complete all my tasks and even had time for self-care.',
    },
    {
      id: 2,
      date: 'March 11, 2024',
      title: 'Feeling grateful',
      content: 'Spent time with family today. These moments remind me of what truly matters in life.',
    },
  ]);

  const handleButtonPress = () => {
    setIsButtonPressed(!isButtonPressed);
  };
  const addEntry = () => {
    const newEntry = {
      id: entries.length + 1,
      date: date.toDateString(),
      title: title,
      content: content,
    };

    setEntries([...entries, newEntry]);
    setIsButtonPressed(false);
    setTitle('');
    setContent('');
  };

  const handleCancel = () => {
    setIsButtonPressed(false);
  };


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={[styles.entriesList, { backgroundColor: colors.background }]}>
        <View style={[styles.header]}>
          <Text style={[styles.title, { color: colors.text }]}>Journal</Text>
          <TouchableOpacity style={[styles.addButton, { backgroundColor: colors.primary }]} onPress={handleButtonPress}>
            <Plus size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
        {isButtonPressed && (
          <Animated.View style={[styles.popUpMessage, { backgroundColor: colors.card }]} entering={FadeIn} exiting={FadeOut}>
            <Text style={[styles.titleText, { color: colors.text }]}>Title:</Text>
            <TextInput
              placeholder="Title"
              style={[styles.titleInput, { color: colors.text }]}
              placeholderTextColor={isDark ? colors.text : colors.subtext}
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              placeholder="Content"
              style={[styles.titleInput, { color: colors.text }]}
              placeholderTextColor={isDark ? colors.text : colors.subtext}
              value={content}
              onChangeText={setContent}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={handleCancel}>
                <Text style={{ color: '#fff' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={addEntry}>
                <Text style={{ color: '#fff' }}>Add</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
        {entries.map((entry) => (
          <TouchableOpacity key={entry.id} style={[styles.entryCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.entryDate, { color: colors.subtext }]}>{entry.date}</Text>
            <Text style={[styles.entryTitle, { color: colors.text }]}>{entry.title}</Text>
            <Text style={[styles.entryContent, { color: colors.subtext }]} numberOfLines={3}>
              {entry.content}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  addButton: {
    backgroundColor: '#6366f1',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  entriesList: {
    flex: 1,
    position: 'relative',
  },
  entryCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    marginTop: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  entryDate: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  entryContent: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
  },
  popUpMessage:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    gap: 10,
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 1000,
  },
  titleText:{
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  titleInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: '#fff',
    padding: 10,
  },
  contentInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    height: 140,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  button: {
    backgroundColor: '#6366f1',
    width: 100,
    height: 44,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});