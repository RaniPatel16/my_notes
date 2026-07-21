import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home", drawerLabel: "Home" }} />
      <Drawer.Screen name="explore" options={{ title: "Explore", drawerLabel: "Explore" }} />
      <Drawer.Screen name="camera" options={{ title: "Camera", drawerLabel: "Camera" }} />
    </Drawer>
  );
}