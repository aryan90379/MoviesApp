import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import useFetch from '@/Services/useFetch';
import { fetchMovieDetails } from '@/Services/api';
import { icons } from '@/constants/icons';

interface MovieInofProps {
  label: string,
  value?: string | number | null
}


const MovieInfo = ({ label, value }: MovieInofProps) => {
  return (

    <View className='flex-col items-start justify-center mt-5  '>

      <Text className='text-light-200 font-normal text-md  '>
        {label}
      </Text>
      <Text className='text-light-100 font-bold text-sm mt-2  '>
        {value || 'N/A'}
      </Text>

    </View>
  )
}


const MovieDetails = () => {

  const { id } = useLocalSearchParams();
  const { data: movie, loading } = useFetch(() => fetchMovieDetails(id as string));



  return (
    <View className='bg-primary flex-1'>
      <ScrollView contentContainerStyle={{
        paddingBottom: 80

      }}>
        <View>
          <Image
            source={{
              uri: movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                : 'https://via.placeholder.com/600x400/1a1a1a/ffffff.png',
            }}
            style={{
              width: '100%',
              height: 600,
              borderRadius: 6,


            }}
            resizeMode='stretch' // optional, only if you're not using expo-image's `contentFit`
          />

        </View>

        <View className='flex-col items-start justify-center mt-5 px-5'>

          <Text className='text-white font-bold text-xl'>{movie?.title}</Text>
          <View className='flex-row items-center gap-x-1 mt-2'>
            <Text className='text-light-200 text-sm'>{movie?.release_date.split('-')[0]}</Text>
            <Text className='text-light-200 text-sm'> {Math.floor(movie?.runtime / 60)}h {movie?.runtime % 60}m</Text>
          </View>

          <View className='flex-row items-center bg-dark-100 py-1 px-2 rounded-md mt-2' >
            <Image
              source={icons.star}
              style={{
                width: 15,
                height: 15
              }}
              className=''

            />

            <Text className='text-white  font-bold text-sm'> {Math.round(movie?.vote_average ?? 0)}/10</Text>
            <Text className='text-light-200 text-sm font-medium ml-2'> ({movie?.vote_count} Votes)</Text>
          </View >
          <MovieInfo label='Overview' value={movie?.overview} />
          <MovieInfo label='Genres' value={movie?.genres?.map((g) => g.name).join('-') || 'N/A'} />
          <View className='flex flex-row justify-between w-1/2'>
            <MovieInfo label='Budget' value={`$${movie?.budget / 1000000} million`} />
            <MovieInfo label='Revenue' value={`$${Math.round(movie?.revenue / 1000000)} million`} />
          </View>
          <MovieInfo label='Production Companies' value={movie?.production_companies.map((c) => c.name).join(' - ') || 'N/A'} />
        </View>
      </ScrollView>
      <TouchableOpacity onPress={router.back}  className='absolute bottom-5 left-0 right-0 mx-5 bg-purple-950 rounded-full py-3.5 flex flex-row items-center justify-center z-50'>
        <Image source={icons.arrow} style={{
          height: 20,
          width: 20,
          marginRight: 1,
          marginTop: 1,
          transform: [{rotate: '180deg'}]

        }}
          tintColor="#fff"
        />
        <Text className='text-white font-semibold text-base' > Go back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MovieDetails