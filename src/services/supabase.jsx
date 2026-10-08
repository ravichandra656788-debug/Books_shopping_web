import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gkstdypvkredifrtiykh.supabase.co";
const supabaseKey = "sb_publishable_SMpH4HtcP87YNch5Ypo2EA_Q_8m7rQw";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);