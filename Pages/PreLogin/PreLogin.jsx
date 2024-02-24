import React from "react";
import { Text, View, Pressable, Image, ImageBackground } from "react-native";
import iconLogo from "../../assets/levelfitLogo.png";
import bgTest from "../../assets/bgTest.png";
const PreLogin = ({ navigation }) => {
  return (
    <ImageBackground source={bgTest} className="bg-cover bg-[#2e2e3d] flex">
      <View className="w-screen h-screen">
        <View className="w-full h-full  justify-center items-center">
          <Image source={iconLogo} className="w-80 h-80" />
          <View className="w-9/12 gap-5 mt-5 flex items-center">
            <Pressable
              className="w-full flex items-center justify-center h-10 rounded-xl  bg-white"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className=" font-black text-[#5271ff] text-md">
                Ir para o login
              </Text>
            </Pressable>
            <Pressable
              className="w-full flex items-center justify-center h-10 rounded-xl bg-[#5271ff]"
              onPress={() => navigation.navigate("Register")}
            >
              <Text className="text-white font-black text-md">
                Registrar-se
              </Text>
            </Pressable>
            <Text className="text-white text-xs opacity-40 font-bold">
              Visualizar Termos de Privacidade
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PreLogin;
