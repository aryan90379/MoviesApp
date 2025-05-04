import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-4xl font-bold text-blue-500 mb-4">Welcome!</Text>
      <Text className="text-4xl font-bold text-gray-700 mb-8">Home!</Text>

      <Link href="/onboarding" asChild>
        <Text className="text-2xl font-bold text-white bg-red-500 px-6 py-5 rounded-full">
          welcome bro
        </Text>
      </Link>

      <Link href="/movie/avengers" asChild>
        <Text className="text-2xl font-bold text-white bg-blue-500 px-6 py-5 my-8 rounded-full">
          avengers movie
        </Text>
      </Link>
    </View>
  );
}
