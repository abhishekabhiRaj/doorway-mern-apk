/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.jsx",
    "./src/navigation/tabs.jsx",
    "./src/components/Topbar.jsx",
    "./src/screens/application/HomeScreen.jsx",
    "./src/screens/auth/Login.jsx",
    "./src/screens/application/VisitorDetailScreen.jsx",
    "./src/screens/application/CreateVisitScreen.jsx",
    "./src/screens/application/SettingScreen.jsx",
    "./src/components/KeyValue.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

