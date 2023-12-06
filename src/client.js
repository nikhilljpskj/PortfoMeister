
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gprxbcpfvcvbassyrwbd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwcnhiY3BmdmN2YmFzc3lyd2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MTk4NDUsImV4cCI6MjAxNzI5NTg0NX0.axvI35x6f5CE38z8oHOaAge6EHVE8iz_taETJ_BdRUM'
export const supabase = createClient(supabaseUrl, supabaseKey)