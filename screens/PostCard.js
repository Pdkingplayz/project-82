import React, { Component } from "react"
import { View, Text, StyleSheet, Image} from "react-native"
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class PostCard extends Component{
    constructor(props){
      super(props)
      this.state = {}
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image source={require("../assets/profile_img.png")} style={styles.profileImage}></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}></Image>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    storyContainer: {
      flex: 1
    },
    storyCard: {
      margin: RFValue(20),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    image: {
      width: "100%",
      alignSelf: "center",
      height: RFValue(200),
      borderTopLeftRadius: RFValue(20),
      borderTopRightRadius: RFValue(20),
      resizeMode: "contain"
    },
    dataContainer: {
      flexDirection: "row",
      padding: RFValue(20)
    },
    titleTextContainer: {
      flex: 0.8
    },
    storyTitleText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      color: "white"
    },
    storyAuthorText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(18),
      color: "white"
    },
    iconContainer: {
      flex: 0.2
    },
    storyTextContainer: {
      padding: RFValue(20)
    },
    storyText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(15),
      color: "white"
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      margin: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      flexDirection: "row",
      backgroundColor: "#eb3948",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
      },
  });