import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view';
import { images } from '@/constants/images';

const TrendingCard = ({ movie: { movie_id, title, poster_url }, index }: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity className='w-32 relative pl-6'>
                <Image
                    source={{
                        uri: poster_url
                            ? `https://image.tmdb.org/t/p/w500${poster_url}`
                            : 'https://via.placeholder.com/600x400/1a1a1a/ffffff.png',
                    }}
                    style={{
                        width: '100%',
                        height: 120,
                        borderRadius: 6,
                        resizeMode: 'cover', // optional, only if you're not using expo-image's `contentFit`

                    }}
                />
                <View className='absolute bottom-10 -left-3.2 px-2 py-1 rounded-full'>

                    <MaskedView maskElement={<Text className='font-bold text-white text-6xl '>{index + 1}</Text>}>


                        <Image
                            source={images.rankingGradient}
                            style={{
                                width: 44, // Equivalent to w-16 (16 * 4px)
                                height: 44, // Equivalent to h-16 (16 * 4px)
                            }}
                            resizeMode='cover'
                        />
                    </MaskedView>
                </View>


                <Text className='text-light-200  font-bold mt-2 text-sm' numberOfLines={2}>{title}</Text>
            </TouchableOpacity>

        </Link>
    )
}

export default TrendingCard