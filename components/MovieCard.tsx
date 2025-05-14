import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Image } from 'expo-image'; // Assuming you're using expo-image
import { icons } from '@/constants/icons';

const MovieCard = ({ id, poster_path, title, vote_average, release_date,original_language}: Movie) => {
    // console.log(poster_path)
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://via.placeholder.com/600x400/1a1a1a/ffffff.png',
                    }}
                    style={{
                        width: '100%',
                        height: 150,
                        borderRadius: 6,
                        resizeMode: 'cover', // optional, only if you're not using expo-image's `contentFit`
                    }}
                />


                <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{title}</Text>
                <View className='flex-row items-center gap-x-1'>
                    <Image
                        source={icons.star}
                        style={{
                            width: 14, // Equivalent to w-16 (16 * 4px)
                            height: 14, // Equivalent to h-16 (16 * 4px)
                        }}
                    />
                    <Text className='text-white text-sm font-bold uppercase'>{(vote_average / 2).toFixed(1)}</Text>

                </View>

                <View className='flex-row items-center justify-between'>
                    <Text className='text-xs text-light-300 font-medium mt-1'>{release_date.split('-')[0]}</Text>
                    <Text className='text-xs text-light-300 font-medium uppercase mt-1'>{original_language}</Text>
                </View>

            </TouchableOpacity>
        </Link>
    );
};

export default MovieCard;
