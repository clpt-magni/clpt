import { useClerk, useSession } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export function useSupabase() {
  const { session } = useSession();
  const [supabase, setSupabase] = useState(() => createClient(supabaseUrl, supabaseAnonKey));

  useEffect(() => {
    async function updateClient() {
      if (session) {
        // Get the JWT from Clerk specifically for Supabase
        const token = await session.getToken({ template: "supabase" });
        
        if (token) {
          const client = createClient(supabaseUrl, supabaseAnonKey, {
            global: {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          });
          setSupabase(client);
        }
      } else {
        // Reset to anonymous client
        setSupabase(createClient(supabaseUrl, supabaseAnonKey));
      }
    }

    updateClient();
  }, [session]);

  return supabase;
}
