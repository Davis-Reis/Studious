import { Text, View } from "react-native";
import { supabase } from "../lib/supabase";

async function testConnection() {
  const { data, error } = await supabase.from("test").select("*").limit(1);

  if (error) {
    console.error("Supabase connection error:", error.message);
    alert("Failed to connect to Supabase " + error.message);
  } else {
    console.log("Supabase connected successfully", data);
    alert("Supabase connected successfully!");
  }
}

testConnection();

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
