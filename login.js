import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import Gambar from "./naisu.png";
import { Header } from "react-navigation-stack";
import Axios from "axios";
import Config from "./config"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
      error: ""
    };
  }
  
  login() {
    const { username, password } = this.state;
    this.setState({
      loading: true
    });
    Axios.post((new Config()).loginAddr, {
      username,
      password
    })
      .then(response => {
        console.log(response.status);

        if (response.status == 200) {
          this.props.navigation.navigate("Beranda", {
            userdata: response.data
          });
        }
      })
      .catch(error => {
        console.log(error);
        if (error.response && error.response.status == 503) {
          this.setState({
            error: "Password/Username Salah Ghan!"
          });
        } else {
          this.setState({
            error: "Bro cek kodingan lo atau IP deh, Cek SEMUA !!!"
          });
        }
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  }
  render() {
    return (
      <View
        style={{  

          height: "100%",
          flexDirection: "column"
        }}
      >
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Image
              source={Gambar}
              style={{
                width: 100,
                height: 100
              }}
            ></Image>
            <Text
              style={{
                fontWeight: "bold",
                marginTop: 20
              }}
            >
              SMKN 1 Cibinong
            </Text>
            <Text>Sign In Continue</Text>
          </View>
        </View>

        <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                width: "80%"
              }}
            >
              <View
                style={{
                  borderBottomColor: "#26abe7",
                  borderBottomWidth: 1
                }}
              >
                <Text
                  style={{
                    fontWeight: "400",
                    color: "#424242"
                  }}
                >
                  Username
                </Text>
                <TextInput
                  id="username"
                  placeholder="Username"
                  //value="test0" //{this.state.username}
                  onChangeText={text => {
                    this.setState({
                      username: text//"test0"
                    });
                  }}
                ></TextInput>
              </View>
              <View
                style={{
                  borderBottomColor: "#26abe7",
                  borderBottomWidth: 1,
                  marginBottom: 30
                }}
              >
                <Text
                  style={{
                    fontWeight: "400",
                    color: "#424242"
                  }}
                >
                  Password
                </Text>
                <TextInput
                  id="password"
                  //value="test0"
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={text => {
                    this.setState({
                      password: text
                    });
                  }}
                ></TextInput>
              </View>
              {this.state.error != "" && <Text>{this.state.error}</Text>}
              <Button
                onPress={() => {
                  this.login();
                }}
                title="SIGN IN"
                color="#2f3631"
                style={{
                  borderRadius: 20
                }}
              ></Button>
              <Text
                style={{
                  fontSize: 10,
                  marginTop: 5,
                  textAlign: "center"
                }}
              >
                SIGN UP FOR AN ACCOUNT
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
