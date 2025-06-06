import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wdqgicsyxbdzfdougqkw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkcWdpY3N5eGJkemZkb3VncWt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNzY3ODgsImV4cCI6MjA2NDY1Mjc4OH0.F6-w3QuQEQq5nWeugapZSQj4AM0u1_EU_Sk_X-HhMCA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
