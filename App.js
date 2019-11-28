import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from "react-native";
import Afghan from "./afghan.jpg";
import Images from "./images.jpg";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import Login from "./login";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Axios from "axios";

class App extends React.Component {
  render() {
    const userdata = this.props.navigation.getParam("userdata");
    return (
      <View
        style={{
          height: "100%",
          flexDirection: "column"
        }}
      >
        <View
          style={{
            paddingTop: 30,
            height: 82,
            flexDirection: "row",
            width: "100%",
            alignItems: "center"
          }}
        >
          <Ionicons
            name="md-menu"
            style={{
              marginLeft: 15
            }}
            size={32}
          ></Ionicons>
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              marginLeft: 15,
              flex: 1
            }}
          >
            Profile
          </Text>
          <Ionicons
            name="md-search"
            size={24}
            style={{ marginRight: 20 }}
          ></Ionicons>
          <Ionicons
            name="md-more"
            size={24}
            style={{ marginRight: 20 }}
          ></Ionicons>
        </View>
        <ScrollView
          style={{
            flex: 1
          }}
        >
          <View
            style={{
              width: "100%",
              height: "35%",
              paddingTop: 5,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black"
            }}
          >
            <Image
              userdata={userdata}
              source={{
                uri: `http://192.168.43.171:7100/photo/${userdata.username}/userphotos/0`
              }}
              style={{
                width: 150,
                height: 150,
                overflow: "hidden",
                borderRadius: 150 / 2,
                borderWidth: 5,
                borderColor: "white"
              }}
            ></Image>

            <Text
              style={{
                fontWeight: "bold",
                marginTop: 20,
                color: "white"
              }}
              userdata={userdata}
            >
              {userdata.namalengkap}
            </Text>
            <Text
              style={{
                marginTop: 10,
                color: "white"
              }}
              userdata={userdata}
            >
              {userdata.tagline} {userdata.file_photo}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "white"
              }}
            >
              Header
            </Text>
            <Button
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
              title="Click Me"
            ></Button>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 65,
              marginBottom: 10,
              backgroundColor: "white",
              elevation: 1
            }}
          >
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontWeight: "bold"
                }}
              >
                1.5 K
              </Text>
              <Text>Posts</Text>
            </View>
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontWeight: "bold"
                }}
              >
                17.5 K
              </Text>
              <Text>Followers</Text>
            </View>
            <View
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontWeight: "bold"
                }}
              >
                1.3 K
              </Text>
              <Text> Following</Text>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 5
              }}
            >
              Photos
            </Text>
          </View>
          <View
            style={{
              height: 100,
              display: "flex",
              flexDirection: "row",
              overflow: "hidden"
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "column",
                  display: "flex"
                }}
              >
                <Biodata userData={userdata} />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  display: "flex"
                }}
              >
                <Biodata userData={userdata} />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  display: "flex"
                }}
              >
                <Biodata userData={userdata} />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  display: "flex"
                }}
              >
                <Biodata userData={userdata} />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  display: "flex"
                }}
              >
                <Biodata userData={userdata} />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  display: "flex"
                }}
              >
                <Biodata userData={userdata} />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  display: "flex"
                }}
              >
                <Biodata userData={userdata} />
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              marginLeft: 5
            }}
          >
            <Text
              style={{
                fontWeight: "bold"
              }}
            >
              Post
            </Text>
          </View>
          <View
            style={{
              marginLeft: 5,
              flexDirection: "row",
              display: "flex"
            }}
          >
            <View
              style={{
                flexDirection: "column",
                display: "flex"
              }}
            >
              <Biodati />
            </View>
            <View
              style={{
                flexDirection: "column",
                display: "flex",
                marginTop: 2
              }}
            >
              <Text
                style={{
                  fontSize: 11
                }}
              >
                Afghan Eka Pangestu posted a photo
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  color: "grey"
                }}
              >
                <AntDesign name="calendar"></AntDesign> 25 Minutes Ago
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Image
              source={Images}
              style={{
                flex: 1,
                height: 500,
                margin: 5
              }}
            ></Image>
          </View>
        </ScrollView>
      </View>
    );
  }
}

var now = 0;
const Biodata = ({ userData }) => {
  var username = userData.username;
  var toDisplay = now++;
  var max = 5; //should be dynamic hit to /photo/username/index
  if (toDisplay == max) {
    toDisplay = 0;
    now = 0;
  }
  const imageUrl = `http://192.168.43.171:7100/photo/${username}/userphotos/${toDisplay}`;
  console.log(username);
  console.log(userData);
  console.log(imageUrl);
  return (
    <React.Fragment>
      <Image
        source={{
          uri: imageUrl
        }}
        style={{
          height: 300,
          width: 300,
          margin: 5,
          paddingTop: 20,
          resizeMode: "contain"
        }}
      ></Image>
    </React.Fragment>
  );
};

function Biodati() {
  return (
    <Image
      source={Afghan}
      style={{
        height: 45,
        width: 45,
        margin: 5,
        paddingTop: 20
      }}
    ></Image>
  );
}

const Navigator = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Beranda: {
    screen: App,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(Navigator);
