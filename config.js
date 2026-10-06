// Paste the two values from Supabase > Project Settings > API.
// The anon (public) key is meant to be visible in the page. The database rules in schema.sql
// are what keep the data private: nobody can read or write anything without logging in.
window.STOCK_CONFIG = {
  SUPABASE_URL: "https://bbfhwrcnzqtzfqomrnwa.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiZmh3cmNuenF0emZxb21ybndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExNzkwNDIsImV4cCI6MjEwNjc1NTA0Mn0.xq7FCWgAC6M9IUjugSNLhTtCLKeTVAUqjBgDjFoov44"
};
