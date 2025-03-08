import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dqijpyguoraipzzndwmu.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxaWpweWd1b3JhaXB6em5kd211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NzM0MzUsImV4cCI6MjA1NjE0OTQzNX0.6EVIAoXALmheQ2OkxLp8hto-WOH8W14Cx8tOIQ5IpWg"

const isWeb = typeof window !== "undefined";
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: isWeb ? window.localStorage : AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})