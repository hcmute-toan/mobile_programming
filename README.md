# 📷 React Native - Image Fetcher

**MSSV: 22110079 – Văn Công Toàn**

A lightweight Android application developed using React Native, allowing users to retrieve and display images directly from a provided URL. This app illustrates asynchronous operations, real-time network status detection, local broadcast behavior, and background service interaction through notification alerts.

---

## 🎯 Purpose

Build a mobile app that can:

- Load and render an image from a user-entered URL
- Monitor real-time internet connectivity
- React to network state changes via event broadcasting
- Notify users periodically that the background process is active

---

## ✨ Key Functionalities

### 🔄 Dynamic Image Retrieval

- Accepts image links through a user input field
- "Fetch Image" button initiates an asynchronous download
- Visual feedback using a loading spinner during the download
- Displays the image or an error message depending on the outcome

### 🌐 Network Awareness

- Utilizes `@react-native-community/netinfo` to detect connection status
- Automatically disables fetch functionality when offline
- Displays a warning message: `"No connection detected"` when the device is disconnected

### 🔔 Background Notifications

- Integrated with `react-native-push-notification` to deliver scheduled local notifications
- Every 5 minutes, the user receives a system message:

  > "Image Fetcher background service is active"

- Custom notification channel configuration is handled within the Android environment

---

## 🧰 Tools & Libraries

- **React Native**
- **TypeScript / JavaScript**
- **NetInfo** – for monitoring internet connectivity
- **Push Notification** – for triggering recurring background alerts

---

## 🧭 User Journey

1. **Input Phase**  
   The user provides a direct image URL through a text field.

2. **Connectivity Verification**  
   The app checks for active internet connection. If unavailable:

   - The image fetch button is disabled
   - A warning is shown notifying loss of connection

3. **Image Fetch Process**  
   Upon confirmation of connectivity:

   - A loading animation appears
   - Image is retrieved using `fetch()`
   - On success: image is displayed
   - On error: a relevant message is shown

4. **Periodic Notification Alert**  
   Independent of user actions, every 5 minutes a local notification is sent, e.g.:
   > 🛎️ Image Fetcher is running in the background

---

## 📄 Required Permissions

The following lines must be declared inside your `AndroidManifest.xml` for proper functionality:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

---

## 🚀 Summary

This app serves as a hands-on demonstration of asynchronous tasks, stateful UI behavior based on network availability, and background service alerts using React Native. It's an ideal example for learning how mobile apps can interact with real-world APIs and manage user experience effectively.
