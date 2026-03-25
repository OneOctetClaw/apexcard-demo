// Config Supabase - partagée entre tous les fichiers
const SUPABASE_URL = 'https://vhdgqtwsxasuggbeujoo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoZGdxdHdzeGFzdWdnYmV1am9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzODU2MzIsImV4cCI6MjA4OTk2MTYzMn0.J_9V--cflujeSnOsc_3wYDOgiMi54RTF5aDHC4fMZVI';

// Initialize Supabase client (requires @supabase/supabase-js to be loaded first)
function getSupabaseClient() {
  if (typeof supabase === 'undefined') {
    console.error('Supabase SDK not loaded');
    return null;
  }
  return supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
