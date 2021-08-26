import React, { useContext } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Platform,
} from "react-native";

import { Button } from "react-native-paper";

import risumIcon from "../../assets/risumIcon.png";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

import { useNavigation } from "@react-navigation/core";
import AuthContext from "../../contexts/Auth";
import { color } from "react-native-reanimated";

export function Welcome() {
  const navigation = useNavigation(); // Navigation between screen
  const { login } = useContext(AuthContext);

  function handleRegister() {
    return navigation.navigate("RegisterStg1");
  }

  function handleLogin() {
    return navigation.navigate("Login");
  }

  function handleEnterAsGuest() {
    return login();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageBox}>
          <Image source={risumIcon} style={styles.image} />
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Risum</Text>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={[styles.button, styles.signUpButton]}
            activeOpacity={0.7}
            onPress={handleRegister}
          >
            <Text style={[styles.text, { color: colors.white }]}>Criar</Text>
            <Text style={[styles.text, { color: colors.white }]}>Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.signInButton]}
            activeOpacity={0.7}
            onPress={handleLogin}
          >
            <Text style={[styles.text, { color: colors.background }]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {Platform.OS === "android" && (
          <View style={styles.guestBox}>
            <TouchableOpacity
              style={[styles.guestButton, {}]}
              activeOpacity={0.7}
              onPress={handleEnterAsGuest}
            >
              <Text style={styles.text}>Entrar como Convidado</Text>
            </TouchableOpacity>
          </View>
        )}
        {Platform.OS === "ios" && (
          <View style={styles.guestBox}>
            <Button
              mode="outlined"
              onPress={handleEnterAsGuest}
              color={colors.text}
              uppercase={false}
              contentStyle={{}}
              style={styles.iosGuestButton}
            >
              <Text style={styles.text}>Entrar como Convidado</Text>
            </Button>
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.text}>Bem vindo ao Risum!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  imageBox: {
    marginTop: Dimensions.get("window").height * 0.01,
  },
  titleBox: {
    marginTop: "-20%",
  },
  buttonBox: {
    width: "97%",
    flexDirection: "row",
    marginTop: 70,
  },
  guestBox: {
    flex: 1,
    width: "97%",
    marginTop: 50,
  },
  image: {
    width: 153,
    height: Dimensions.get("window").width * 0.9,
    resizeMode: "contain",
  },
  title: {
    fontSize: 50,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.green,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 90,
    width: "100%",
    flex: 1,
  },
  signUpButton: {
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  signInButton: {
    backgroundColor: colors.green,
  },
  guestButton: {
    height: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    borderRadius: 7,

    borderColor: colors.outlineGray,
    borderWidth: 2,
  },
  footer: {
    backgroundColor: colors.lightBackground,
    width: "120%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.heading,
    color: colors.text,
  },
  iosGuestButton: {
    borderColor: colors.outlineGray,
    borderWidth: 2,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: '10.5%'

  },
});
