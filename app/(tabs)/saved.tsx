import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const savedMovies = [
  {
    id: 1,
    title: 'Inception',
    poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
    year: '2010',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    year: '2008',
  },
  {
    id: 3,
    title: 'Interstellar',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    year: '2014',
  },
]

const Saved = () => {
  return (
    <View className='bg-primary flex-1 px-5 pt-10'>
      <Text className='text-white font-bold text-2xl mb-5'>Saved Movies</Text>
      
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {savedMovies.map((movie) => (
          <TouchableOpacity
            key={movie.id}
            className='flex-row items-center bg-dark-100 rounded-xl mb-4 overflow-hidden'
          >
            <Image
              source={{ uri: movie.poster }}
              className='w-24 h-36'
              resizeMode='cover'
            />
            <View className='pl-4 flex-1'>
              <Text className='text-white text-lg font-semibold'>{movie.title}</Text>
              <Text className='text-light-200 text-sm mt-1'>{movie.year}</Text>
              <TouchableOpacity className='mt-3 bg-red-500 px-3 py-1 rounded-md self-start'>
                <Text className='text-white text-sm'>Remove</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Saved
