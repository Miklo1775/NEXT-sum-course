import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(
  "https://xnwnzguxpvdrludvuajh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhud256Z3V4cHZkcmx1ZHZ1YWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwODIwMDYsImV4cCI6MTk5NDY1ODAwNn0.ogPnljz9bn3JcqTVt4yfnXoJPLYo7z-oZZCVy6r-MqY"
);
