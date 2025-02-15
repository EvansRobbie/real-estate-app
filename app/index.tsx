import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl text-red-500">Welcome to real estate</Text>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link
        href={{
          pathname: "/properties/[id]",
          params: { id: "1" },
        }}
      >
        Properties
      </Link>
    </View>
  );
}
