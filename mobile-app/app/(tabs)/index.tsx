import { SafeAreaView,Text, View, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import { Heart , Wind, Timer, User} from "lucide-react-native"
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";

export default function Index() {

  
const { colors, isDark } = useTheme();
const [session, setSession] = useState<Session | null>(null)

useEffect(() => {
  // supabase.auth.getSession().then(({ data: { session } }) => {
  //   setSession(session)
  // })

  // const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
  //   setSession(session)
  // })

  // return () => {
  //   subscription.unsubscribe()
  // }
  
}, [])


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>

        <View style={[styles.header]}>
          <View style={styles.headerTop}>
            <Text style={[styles.greeting, { color: colors.text }]} >Hello there 👋</Text>
            <ThemeToggle />
          </View>
          <Text style={[styles.subGreeting, { color: colors.subtext }]}>How are you feeling today?</Text>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.card }]}>
            <Heart size={24} color={colors.primary} />
            <Text style={[styles.actionTitle, { color: colors.text }]}>Check In</Text>
            <Text style={[styles.actionDescription, { color: colors.subtext }]}>Record your daily mood</Text>
          </TouchableOpacity>

          <TouchableOpacity style= {[styles.actionCard, { backgroundColor: colors.card }]}>
            <Wind size={24} color={colors.primary} />
            <Text style={[styles.actionTitle, { color: colors.text }]}>Breathe</Text>
            <Text style={[styles.actionDescription, { color: colors.subtext }]}>Guided breathing exercise</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionCard, { backgroundColor: colors.card }]}>
            <Timer size={24} color={colors.primary} />
            <Text style={[styles.actionTitle, { color: colors.text }]}>Meditate</Text>
            <Text style={[styles.actionDescription, { color: colors.subtext }]}>Start meditation timer</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Daily Quote</Text>
          <View style={[styles.quoteCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.quote, { color: colors.text }]}>
              "The greatest glory in living lies not in never falling, but in rising every time we fall."
            </Text>
            <Text style={[styles.author, { color: colors.subtext }]}>- Nelson Mandela</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Today's Tips</Text>
          <View style={[styles.tipCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.tipTitle, { color: colors.text }]}>Practive Mindfulness</Text>
            <Text style={[styles.tipDescription, { color: colors.subtext }]}>Take 5 minutes to focus on your breath and observe your thoughts without judgement</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    padding: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerInner:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userIcon:{
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  headerTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  subGreeting: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginTop: 12,
  },
  actionDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
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
  quoteCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  quote: {
    fontSize: 16,
    color: '#374151',
    fontStyle: 'italic',
    lineHeight: 24,
  },
  author: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 8,
  },
  tipCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  tipDescription: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
});