import { View, Image, Text, Pressable } from "react-native";
import { Svg, Path } from "react-native-svg";
import { baseURL } from "../request";
import { useState } from "react";

function LikeSvg({isActive = false}) {
    return (
        <Svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M13.2782 4.5C13.2782 2.84333 11.8789 1.5 10.1529 1.5C8.86287 1.5 7.75487 2.25067 7.2782 3.322C6.80153 2.25067 5.69353 1.5 4.40286 1.5C2.6782 1.5 1.2782 2.84333 1.2782 4.5C1.2782 9.31333 7.2782 12.5 7.2782 12.5C7.2782 12.5 13.2782 9.31333 13.2782 4.5Z"
                stroke={isActive ? "#E76565" : "#212124"}
                fill={isActive ? "#E76565" : "transparent"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

function CommentSvg() {
    return (
        <Svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M11.8182 9.82L12.6115 13L9.31153 11.3467C8.65482 11.5597 7.96859 11.6677 7.2782 11.6667C3.94486 11.6667 1.2782 9.28 1.2782 6.33333C1.2782 3.38667 3.94486 1 7.2782 1C10.6115 1 13.2782 3.38667 13.2782 6.33333C13.2672 7.64197 12.743 8.89401 11.8182 9.82Z"
                stroke="#212124"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default function Post({ data }) {
    const [isLiked, toggleLiked] = useState(false);

    const likesCount = (data.item.likes_count || 0) + isLiked;
    const commentsCount = data.item.comments_count || 0;

    function onLike() {
        toggleLiked(prevState => !prevState);
    }

    function onComment() {

    }

    function parseTimestamp(timestamp) {
        const now = new Date();
        const targetTime = new Date(timestamp);

        const timeDiff = targetTime.getTime() - now.getTime();
        const minutesDiff = Math.round(timeDiff / (1000 * 60)); // Convert milliseconds to minutes

        if (minutesDiff < 0) {
            return "Właśnie wstawiono";
        } else if (minutesDiff < 60) {
            return minutesDiff + " minut temu";
        } else if (minutesDiff < 1440) {
            const hoursDiff = Math.floor(minutesDiff / 60);
            return hoursDiff + " godzin temu";
        } else {
            const daysDiff = Math.floor(minutesDiff / 1440);
            return daysDiff + " dni temu";
        }
    }

    return (
        <View style={{ padding: 22 }}>
            <View style={{ flexDirection: "row", paddingBottom: 16 }}>
                <Image source={{ uri: baseURL + data.item.ngo.image }} style={{width:50, height: 50, resizeMode: "contain", borderRadius: 100}}></Image>
                <View style={{ marginLeft: 12, justifyContent: "center" }}>
                    <Text
                        style={{
                            fontFamily: "HelveticaBold",
                            fontSize: 14,
                            lineHeight: 16,
                        }}
                    >
                        {data.item.ngo.name}
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Helvetica",
                            fontSize: 14,
                            lineHeight: 16,
                        }}
                    >
                        {parseTimestamp(data.item.created_at)}
                    </Text>
                </View>
            </View>
            <Text style={{ fontFamily: "Helvetica", fontSize: 16 }}>
                {data.item.content}
            </Text>
            <Image
                source={{ uri: baseURL + data.item.image }}
                style={{
                    marginTop: 16,
                    borderRadius: 20,
                    width: "100%",
                    height: undefined,
                    aspectRatio: 3 / 2,
                }}
            ></Image>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingVertical: 16,
                        paddingHorizontal: 15,
                    }}
                    onPress={() => onLike()}
                >
                    <LikeSvg isActive={isLiked} />
                    <Text style={{ fontFamily: "Helvetica", marginLeft: 10 }}>
                        {likesCount}
                    </Text>
                </Pressable>
                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingVertical: 16,
                        paddingHorizontal: 15,
                    }}
                    onPress={() => onComment()}
                >
                    <CommentSvg />
                    <Text style={{ fontFamily: "Helvetica", marginLeft: 10 }}>
                        {data.item.comments_count}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
