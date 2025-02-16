import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const SignIn = () => {
  const { isLoggedIn, refetch, loading } = useGlobalContext();

  if (!loading && isLoggedIn) return <Redirect href={"/"} />;
  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full w-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="cover"
        />
        <View className="px-10  ">
          <Text className="text-base text-center uppercase text-black-200 font-rubik">
            Welcome to real estate
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {"\n"}{" "}
            <Text className="text-primary-300">Your Dream Home</Text>
          </Text>
          <Text className="tect-lg font-rubik text-black-200 text-center mt-4">
            Login to Real Estate with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 py-4 mt-5 rounded-full w-full"
          >
            <View className="flex flex-row  justify-center items-center">
              <Image
                source={icons.google}
                className="w-5 h-5 "
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
