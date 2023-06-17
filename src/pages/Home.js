import React, { useState, useEffect } from "react";
import { FlatList, View, Text, RefreshControl } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";
import API from "../request";

export default function Home({ route, navigation }) {
    const [posts, setPosts] = useState([]);
    const [refreshing, setRefresh] = useState(false);

    const fetchPosts = async () => {
        const { data } = await API.get("posts");
        setPosts(data);
    };

    const refreshPosts = async () => {
        setRefresh(true);
        fetchPosts();
        setTimeout(() => {
            setRefresh(false);
        }, 2000);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
            <FlatList
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                data={posts}
                renderItem={(data, counter) => (
                    <Post data={data} key={counter} />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => refreshPosts}
                    ></RefreshControl>
                }
                ListHeaderComponent={
                    <Header
                        navigation={navigation}
                        title={
                            <Text
                                style={{
                                    fontFamily: "HelveticaBold",
                                    fontSize: 26,
                                }}
                            >
                                Aktualności
                            </Text>
                        }
                    />
                }
            ></FlatList>
        </View>
    );
}
