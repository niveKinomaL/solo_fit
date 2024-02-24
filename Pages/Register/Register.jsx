import React from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import soloFitRegister from "../../assets/SoloFitRegister.png";
import bgTest from "../../assets/bgTest.png";
const Register = ({ navigation }) => {
  return (
    <ImageBackground source={bgTest} className="bg-cover bg-[#2e2e3d] flex">
      <View className="w-screen h-screen">
        <View className="w-full h-full justify-center items-center">
          <Image source={soloFitRegister} className="w-full h-64" />
          <View className="w-9/12 gap-5 mt-0 flex items-center">
            <TextInput
              placeholderTextColor={"#ffffff"}
              placeholder="E-mail"
              className="border-4 rounded-xl px-5 font-black  text-white h-14 bg-transparent border-[#5271ff] w-full"
            />
            <TextInput
              placeholder="Senha"
              placeholderTextColor={"#ffffff"}
              secureTextEntry={true}
              className="border-4 px-5 font-black text-white rounded-xl h-14 bg-transparent border-[#5271ff] w-full"
            />
            <Pressable
              className="w-full flex items-center justify-center h-10 rounded-xl bg-white"
              onPress={() => navigation.navigate("PreLogin")}
            >
              <Text className="text-[#5271ff] font-black text-md">
                LEVEL UP!
              </Text>
            </Pressable>
            <Pressable
              className="w-full flex items-center justify-center h-10 rounded-xl bg-[#5271ff]"
              onPress={() => navigation.navigate("PreLogin")}
            >
              <Text className="text-white font-black text-md">Voltar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
