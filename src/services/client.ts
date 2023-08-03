import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pkzylvoevhzorzhhzhky.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrenlsdm9ldmh6b3J6aGh6aGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MjUzNDAsImV4cCI6MjAwNjQwMTM0MH0.TeTcj7nTHmFPBenMhC5gPpEBnaUIwulnYIck2LTxUj8'
export const supabase = createClient(supabaseUrl, supabaseKey)