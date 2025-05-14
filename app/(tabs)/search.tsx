import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native';
import { images } from '@/constants/images';
import MovieCard from '@/components/MovieCard';
import useFetch from '@/Services/useFetch';
import { fetchPopularMovies } from "@/Services/api";

// import { useRouter } from 'expo-router';
import { icons } from '@/constants/icons';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';
import { updateSearchCount } from '@/components/appwrite';
import { MaterialIcons } from '@expo/vector-icons'; // or any icon set you use

const Search = () => {
  const [SearchQuery, setSearchQuery] = useState('')
  // const router = useRouter(); // called hook when start with use





  // desstrcuture data and rename it as movies and then equating it to 
  const {
    data: movies,
    loading,
    refetch: loadMovies,
    reset,
    error } = useFetch(() => fetchPopularMovies({
      query: SearchQuery,

    }), false)


  useEffect(() => {

    const timeoutId = setTimeout(async () => {

      if (SearchQuery.trim()) {
        await loadMovies();
        
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId)

  }, [SearchQuery])


  useEffect(() => {
    if ( movies?.[0] && movies?.length > 0 ) { 
           updateSearchCount(SearchQuery, movies[0]);
        }
  }, [movies]);
  

  return (
    <View className='flex-1 bg-primary'>

      <Image
        source={images.bg}
        style={{
          position: 'absolute',
          width: '100%',
          height: '70%',
          resizeMode: 'cover',
          zIndex: 0,
        }}
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className='px-5 '
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: 16,
          marginVertical: 16
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-2 items-center'>
              <Image
                source={icons.logo}
                style={{
                  width: 60,         // Adjusted for visibility
                  height: 50,        // Adjusted for visibility
                  marginTop: 90,
                  marginBottom: 5,
                  alignSelf: 'center' // Correct way to center horizontally
                }}


              />


            </View>
            <View>
              <SearchBar
                placeholder='Search movies ...'
                value={SearchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>
            {loading && (
              <ActivityIndicator size="large" color='#0000ff' className='my-3' />
            )}
            {error && (
              <Text className='text-red-500 px-5 my-3'>
                Error: {error.message}

              </Text>
            )}
            {!loading && !error && SearchQuery.trim() && movies?.length > 0 && (
              <Text className='text-xl font-bold text-white'>
                Search Results for {' '}
                <Text className='text-accent'> {SearchQuery}</Text>

              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className='mt-10 px-5 items-center'>

              {SearchQuery.trim() ? (
                <View className='bg-red-100 p-5 rounded-xl shadow-md w-full items-center'>
                  <MaterialIcons name="error-outline" size={48} color="red" />
                  <Text className='text-red-700 text-xl font-semibold mt-3'>
                    No Movies Found
                  </Text>
                  <Text className='text-red-500 text-center mt-1'>
                    Try searching with different keywords
                  </Text>
                </View>
              ) : (
                <View className='bg-blue-100 p-5 rounded-xl shadow-md w-full items-center'>
                  <MaterialIcons name="search" size={48} color="blue" />
                  <Text className='text-blue-700 text-xl font-semibold mt-3'>
                    Start Searching
                  </Text>
                  <Text className='text-blue-500 text-center mt-1'>
                    Enter a movie name to see results
                  </Text>
                </View>
              )}
            </View>
          ) : null
        }
      />
      <Text>search</Text>
    </View>
  );
}

export default Search