import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import { Link, router } from 'expo-router';
import { Mail, Lock, User, ArrowRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/context/ThemeContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { supabase } from '@/lib/supabase';

export default function SignUpScreen() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors, isDark } = useTheme();
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
    setName('')
    setEmail('')
    setPassword('')
    router.replace('/(auth)/sign-in')
  }

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809' }}
      style={styles.backgroundImage}>
      <LinearGradient
        colors={[
          isDark ? 'rgba(17,24,39,0.9)' : 'rgba(255,255,255,0.9)',
          isDark ? 'rgba(17,24,39,0.95)' : 'rgba(255,255,255,0.95)',
        
        ]}
        style={styles.gradient}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.header}>
              <Text style={[styles.title, { color: colors.text }]}>Create Account</Text>
              <ThemeToggle />
              <Text style={[styles.subtitle, { color: colors.subtext }]}>Start your journey to better mental health</Text>
            </View>

            <View style={[styles.form, { backgroundColor: colors.card }]}>
              <View style={[styles.inputContainer, { backgroundColor: colors.input }]}>
                <User size={20} color="#6b7280" style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: colors.text }]}
                  placeholder="Full Name"
                  value={name}
                  onChangeText={setName}
                  placeholderTextColor="#9ca3af"
                />
              </View>

              <View style={[styles.inputContainer, { backgroundColor: colors.input }]}>
                <Mail size={20} color="#6b7280" style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: colors.text }]}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholderTextColor="#9ca3af"
                />
              </View>

              <View style={[styles.inputContainer, { backgroundColor: colors.input }]}>
                <Lock size={20} color="#6b7280" style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: colors.text }]}
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  placeholderTextColor="#9ca3af"
                />
              </View>

              <View style={styles.termsContainer}>
                <Text style={[styles.termsText, { color: colors.subtext }]}>
                  By signing up, you agree to our{' '}
                  <Text style={[styles.termsLink, { color: colors.primary }]}>Terms of Service</Text> and{' '}
                  <Text style={[styles.termsLink, { color: colors.primary }]}>Privacy Policy</Text>
                </Text>
              </View>

              <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} disabled={loading} onPress={() => signUpWithEmail()}>
                <Text style={styles.buttonText}>Create Account</Text>
                <ArrowRight size={20} color="#ffffff" />
              </TouchableOpacity>

              <View style={styles.signinContainer}>
                <Text style={[styles.signinText, { color: colors.subtext }]}>Already have an account?</Text>
                <Link href="/sign-in" asChild>
                  <TouchableOpacity>
                    <Text style={[styles.signinLink, { color: colors.primary }]}>Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
  form: {
    gap: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },
  termsContainer: {
    marginTop: 8,
  },
  termsText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  termsLink: {
    color: '#6366f1',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginTop: 16,
  },
  signinText: {
    color: '#6b7280',
    fontSize: 14,
  },
  signinLink: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '500',
  },
});