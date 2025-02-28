import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Smile, Meh, Frown, Sun } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
export default function MoodScreen() {

  const { colors, isDark } = useTheme();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView>
        <View style={[styles.header]}>
          <Text style={[styles.title, { color: colors.text }]}>Mood Tracker</Text>
          <Text style={[styles.subtitle, { color: colors.subtext }]}>How are you feeling today?</Text>
        </View>

        <View style={styles.moodGrid}>
          <TouchableOpacity style={[styles.moodCard, { backgroundColor: colors.card }]}>
            <Smile size={32} color="#10b981" />
            <Text style={[styles.moodText, { color: colors.text }]}>Great</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.moodCard, { backgroundColor: colors.card }]}>
            <Sun size={32} color="#6366f1" />
            <Text style={[styles.moodText, { color: colors.text }]}>Good</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.moodCard, { backgroundColor: colors.card }]}>
            <Meh size={32} color="#f59e0b" />
            <Text style={[styles.moodText, { color: colors.text }]}>Okay</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.moodCard, { backgroundColor: colors.card }]}>
            <Frown size={32} color="#ef4444" />
            <Text style={[styles.moodText, { color: colors.text }]}>Bad</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section} >
          <Text style={[styles.sectionTitle, { color: colors.text }]}>This Week</Text>
          <View style={[styles.weeklyMood, {backgroundColor: colors.card}]}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <View key={day} style={styles.dayColumn}>
                <View style={[styles.moodIndicator, { backgroundColor: getMoodColor(index) }]} />
                <Text style={[styles.dayText, { color: colors.subtext }]}>{day}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Monthly Overview</Text>
          <View style={[styles.statsCard, { backgroundColor: colors.card }]}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: colors.text }]}>70%</Text>
              <Text style={[styles.statLabel, { color: colors.subtext }]}>Positive Days</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: colors.text }]}>23</Text>
              <Text style={[styles.statLabel, { color: colors.subtext }]}>Entries</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: colors.text }]}>85%</Text>
              <Text style={[styles.statLabel, { color: colors.subtext }]}>Completion</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const getMoodColor = (index: number) => {
  const colors = ['#10b981', '#6366f1', '#f59e0b', '#10b981', '#6366f1', '#ef4444', '#f59e0b'];
  return colors[index];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 12,
  },
  moodCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  moodText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  weeklyMood: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dayColumn: {
    alignItems: 'center',
  },
  moodIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginBottom: 8,
  },
  dayText: {
    fontSize: 12,
    color: '#6b7280',
  },
  statsCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
});