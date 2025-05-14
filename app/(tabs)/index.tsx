import { Link } from "expo-router";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import { Image } from "expo-image";
import { icons } from "@/constants/icons"; // ensure this path is correct
import { images } from "@/constants/images";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/Services/useFetch";
import { fetchPopularMovies } from "@/Services/api";
import MovieCard from "@/components/MovieCard";
import { getTrendingMovies } from "@/components/appwrite";
import TrendingCard from "@/components/TrendingCard";

export default function Index() {
  const router = useRouter(); // called hook when start with use

  const {
    data: trendingMovies,
    loading: TrendingLoading,
    error: TrendingError } = useFetch(getTrendingMovies);


  // desstrcuture data and rename it as movies and then equating it to 
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError } = useFetch(() => fetchPopularMovies({
      query: '',

    }))



  return (
    <View className="flex-1 bg-primary">
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
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator=1{false} contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
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

        {moviesLoading || TrendingLoading ? (
          <ActivityIndicator
            size="large"
            color="@0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError || TrendingError ? (
          <Text>Error: {moviesError?.message || TrendingError?.message}</Text>
        ) :
          (

            <View className="flex-1 mt-15">
              <SearchBar
                onPress={() => router.push("/search")}
                placeholder='Search Movies'
              />

              {trendingMovies && (
                <View className="mt-10 ">
                  <Text className="text-lg text-white font-bold mb-3">
                    Trending Movies
                  </Text>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}

                    className=""
                    data={trendingMovies}
                    renderItem={({ item, index }) => (

                      <TrendingCard movie={item} index = {index}/>
                    )}
                    keyExtractor={(item) => item.movie_id.toString()}
                  />
                </View>
              )

              }
              <>
                <Text className="text-lg text-white font-bold mt-5 mb-3">Lates Movies</Text>
                <FlatList
                  data={movies}
                  renderItem={({ item }) => (

                    <MovieCard {...item} />)} // spread out all of the properties
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent: 'flex-start',
                    gap: 10,
                    marginBottom: 10,
                    paddingRight: 5,

                  }}
                  className="mt-2 pb-32"
                  scrollEnabled={false}

                />
              </>

            </View>
          )
        }


      </ScrollView>

      <Text>Hey</Text>
    </View>
  );
}
