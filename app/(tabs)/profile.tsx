import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Settings, Bell, Shield, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';
import { router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { supabase } from '@/lib/supabase';
export default function ProfileScreen() {
  const { colors, isDark } = useTheme();
  const menuItems = [
    { icon: Settings, label: 'Settings', color: '#6366f1' },
    { icon: Bell, label: 'Notifications', color: '#8b5cf6' },
    { icon: Shield, label: 'Privacy', color: '#10b981' },
    { icon: HelpCircle, label: 'Help & Support', color: '#f59e0b' },
    { icon: LogOut, label: 'Log Out', color: '#ef4444' },
  ];

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error.message)
    } else {
      router.replace('/(auth)/sign-in')
    }
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.background }]}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
            style={styles.avatar}
          />
          <Text style={[styles.name, { color: colors.text }]}>Sarah Johnson</Text>
          <Text style={[styles.email, { color: colors.subtext }]}>sarah.j@example.com</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: colors.text }]}>30</Text>
            <Text style={[styles.statLabel, { color: colors.subtext }]}>Days Streak</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: colors.text }]}>85%</Text>
            <Text style={[styles.statLabel, { color: colors.subtext }]}>Goal Progress</Text>
          </View>
        </View>
      </View>

      <View style={[styles.menuSection]}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={item.label === 'Log Out' ? handleLogOut : undefined} style={[styles.menuItem, { backgroundColor: colors.card }]}>
            <View style={[styles.menuIconContainer, { backgroundColor: colors.input }]}>
              <item.icon size={24} color={item.color} />
            </View>
            <Text style={[styles.menuLabel, { color: colors.text }]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingTop: 40,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
  },
  email: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#e5e7eb',
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
  menuSection: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuLabel: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
});