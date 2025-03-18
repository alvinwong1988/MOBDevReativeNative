import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "./data.json";

const HomeScreen = () => {
  //////////// Method 1: Using a For Loop (v1)
  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.header}>Todo List (For Loop)</Text>
  //     {(() => {
  //       const items = []; // Initialize an array to hold the items
  //       for (let i = 0; i < data.length; i++) {
  //         const date = new Date(data[i].createdAt);
  //         const formattedDate = date.toLocaleDateString();
  //         const formattedTime = date.toLocaleTimeString();
  //         items.push(
  //           <View key={i} style={styles.itemContainer}>
  //             <Text style={styles.title}>{data[i].title} </Text>
  //             <Text style={styles.description}>{data[i].description}</Text>
  //             <Text style={styles.meta}>
  //               By: {data[i].user} - Comments: {data[i].commentCount}
  //             </Text>
  //             <Text style={styles.meta}>
  //               {formattedDate} {formattedTime}
  //             </Text>
  //           </View>
  //         );
  //       }
  //       return items;
  //     })()}
  //   </View>
  // );
  // ...
  //////////// Method 3: Using the Map Function
  // ...
  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.header}>Todo List (Map)</Text>
  //     {data.map((item, index) => {
  //       // Convert createdAt to a formatted date string in HK timezone
  //       const formattedDate = new Date(item.createdAt).toLocaleString("en-HK", {
  //         timeZone: "Asia/Hong_Kong",
  //       });
  //       return (
  //         <View key={index} style={styles.itemContainer}>
  //           <Text style={styles.title}>{item.title}</Text>
  //           <Text style={styles.description}>{item.description}</Text>
  //           <Text style={styles.meta}>
  //             By: {item.user} - Comments: {item.commentCount}
  //           </Text>
  //           <Text style={styles.meta}>{formattedDate}</Text>
  //         </View>
  //       );
  //     })}
  //   </View>
  // );
  // ...

  //////////// Method 4: Using FlatList
  // ...
  const renderItem = ({ item }) => {
    const formattedDate = new Date(item.createdAt).toLocaleString("en-HK", {
      timeZone: "Asia/Hong_Kong",
    });
    // Render each item in the FlatList
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.meta}>
          By: {item.user} - Comments: {item.commentCount}
        </Text>
        <Text style={styles.meta}>{item.formattedDate}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List (FlatList)</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  meta: {
    fontSize: 12,
    color: "#666",
  },
});

export default HomeScreen;
