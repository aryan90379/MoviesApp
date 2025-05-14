// track the searches made by a user
import { Client, Databases, ID, Query } from 'react-native-appwrite';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!; // exclamation mark tell tryprscript that we know this value will be there
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!; // exclamation mark tell tryprscript that we know this value will be there

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!); // Your project ID

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {

    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('SearchTerm', query),
        ])


        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];
            await database.updateDocument(
                DATABASE_ID,
                COLLECTION_ID,
                existingMovie.$id,
                {
                    count: existingMovie.count + 1,
                }
            )
        } else {
            await database.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {
                    SearchTerm: query,
                    count: 1,
                    movie_id: movie.id,
                    title: movie.title,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }
            )
        }

        console.log("hey bhai",result)
    } catch (error) {
        console.log(error)
        throw new Error('Failed to update search count');
    }


    // check if a reacord of a movie already exits, if ti does then incremeen the sarch couunt by one===   // if no document is found 
    // Creat a new document in appwrite database ->1
}


export const getTrendingMovies = async(): Promise<TrendingMovie[]|undefined > =>{
try {
     const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc('count'),

        ])
        return result.documents as unknown as TrendingMovie[]
} catch (error) {
    console.log(Error);
    return undefined;
}
}