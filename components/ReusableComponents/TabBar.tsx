import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import globalStyles from "../../globals/globalStyles";
import { ms } from "react-native-size-matters";
import { colors } from "../../globals/colors";
import { useSelector } from "react-redux";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

interface RootState {
  global: {
    display: boolean;
  };
}

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const display = useSelector((state: RootState) => state.global.display);

  return (
    <View
      style={[
        {
          flexDirection: "row",
          borderTopWidth: ms(2),
          paddingVertical: ms(10),
          borderColor: colors.textOpacityPP,
          backgroundColor: "white",
        },
        !display && { display: 'none' }
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const Icon = options.tabBarIcon
          ? options.tabBarIcon({
              focused: isFocused,
              color: isFocused ? colors.accentTertiary : colors.textColor,
              size: 20,
            })
          : null;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBar}
          >
            {Icon}
            <Text
              style={[
                { color: isFocused ? colors.accentTertiary : colors.textColor },
                globalStyles.textSm,
              ]}
            >
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ms(5),
  },
});

export default TabBar;