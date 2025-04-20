# 📝 TaskMate – React Native ToDo App

**Student ID: 22110079 – Van Cong Toan**

**TaskMate** is a lightweight mobile app built with **React Native** and **Expo** that helps users create, sort, and delete tasks with assigned due dates. It serves as a hands-on project for learning core components and features commonly used in mobile app development.

---

## ✨ Key Features

- ➕ **Add new tasks** with a name and a deadline
- ❌ **Remove tasks** with a simple tap
- 📆 **Select due dates** using a user-friendly Date Picker
- 🔃 **Sort tasks** by:
  - Task name (alphabetical)
  - Due date (chronological)

---

## 🎓 Learning Objectives

### ✍️ User Input Handling

- Utilizes `TextInput` for entering task names
- Uses `Button` or `TouchableOpacity` for submitting tasks

📚 Helps learners understand how to **capture and manage user input** effectively.

---

### 📂 Menus & Interactions

- Leverages `react-native-material-menu` to show a popup menu
- Menu options include:
  - Sort by name
  - Sort by date

🎯 Great practice for building **interactive UI elements** with multiple options.

---

### 🗓️ Date Picker Integration

- Integrates `@react-native-community/datetimepicker` to choose task deadlines
- Provides a clean and native-like date selection experience

🧠 Helps students become familiar with **date/time input in mobile interfaces**.

---

## ⚙️ Tech Stack

- **React Native** with **Expo**
- **TypeScript**
- **React Navigation**
- **DateTimePicker**
- **Material Menu**
- **AntDesign Icons**

---

## 🧱 Environment Setup

### 🔧 Step 1: Install Java Development Kit

- Requires Java 17 or higher
- Download it from:  
  [Oracle Java Archive](https://www.oracle.com/in/java/technologies/downloads/archive/)
- Set the `JAVA_HOME` environment variable

To verify:

```bash
java -version
```

---

### 📲 Step 2: Install Android Studio

Follow setup instructions as guided in lesson video #15.

---

### 🛠 Step 3: Set ANDROID_HOME

**On Windows:**

```plaintext
ANDROID_HOME=C:\Users\<YourUsername>\AppData\Local\Android\Sdk
```

Add to your system `PATH`:

```plaintext
C:\Users\<YourUsername>\AppData\Local\Android\Sdk\platform-tools
C:\Users\<YourUsername>\AppData\Local\Android\Sdk\emulator
```

**On macOS:**  
Use a VPN if needed to access guides. Refer to the official documentation:  
👉 [React Native Setup Guide](https://reactnative.dev/docs/environment-setup)

Check your setup:

```bash
adb --version
```

---

## 🚀 Running the App

```bash
# Clone the repo
git clone <your-repo-url>

# Install dependencies
npm install --legacy-peer-deps

# Start the app
npm start
```
