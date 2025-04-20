import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Platform,
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import PushNotification from "react-native-push-notification";

const App = () => {
  const [url, setUrl] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  // Network Monitoring
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const connected = state.isConnected ?? false;
      setIsConnected(connected);
      setStatus(connected ? "" : "No internet connection");
    });

    return () => unsubscribe();
  }, []);

  // Periodic Notification Setup
  useEffect(() => {
    try {
      // Create notification channel for Android
      PushNotification.createChannel(
        {
          channelId: "image-loader-channel",
          channelName: "Image Loader Service",
          soundName: "default",
          importance: 3,
        },
        (created) => console.log(`Channel created: ${created}`)
      );

      PushNotification.configure({
        onNotification: (notification) => {
          console.log("Notification:", notification);
        },
        requestPermissions: Platform.OS === "ios" ? true : false,
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
      });

      const interval = setInterval(() => {
        PushNotification.localNotification({
          channelId: "image-loader-channel",
          title: "Image Loader Service",
          message: "Image Loader Service is running",
        });
      }, 5 * 60 * 1000);

      return () => clearInterval(interval);
    } catch (error) {
      console.error("PushNotification setup failed:", error);
    }
  }, []);

  // Load Image
  const loadImage = async () => {
    if (!isConnected) {
      Alert.alert("Error", "No internet connection");
      return;
    }

    if (!url) {
      Alert.alert("Error", "Please enter a valid URL");
      return;
    }

    setLoading(true);
    setStatus("Loading...");

    try {
      const response = await fetch(url);
      if (response.ok) {
        setImageUri(url);
        setStatus("Image loaded successfully");
      } else {
        throw new Error("Failed to load image");
      }
    } catch (error) {
      setStatus("Failed to load image");
      Alert.alert("Error", "Failed to load image. Please check the URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Loader App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter image URL"
        value={url}
        onChangeText={setUrl}
        editable={isConnected !== null ? isConnected : undefined}
      />
      <Button
        title="Load Image"
        onPress={loadImage}
        disabled={!isConnected || loading}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <Text style={styles.status}>{status}</Text>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  status: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  image: {
    width: "100%",
    height: 300,
    marginTop: 20,
  },
});

export default App;
