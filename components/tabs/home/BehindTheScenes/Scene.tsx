import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";

export default function Scene({ source }: any) {
  const player = useVideoPlayer(source, (player) => {
    player.loop = true;
    // player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  return (
    <View style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        nativeControls={false}
      />

      <View style={styles.controlsContainer}>
        {isPlaying ? (
          <Pressable
            onPress={() => {
              player.pause();
            }}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <MaterialIcons name="pause" size={50} color="white" />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              player.play();
            }}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <MaterialIcons name="play-arrow" size={50} color="white" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  video: {
    width: "95%",
    height: Dimensions.get("window").height * 0.3,
    // borderRadius: 20,
  },
  controlsContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
  },
});
