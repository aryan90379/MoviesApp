import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Search from './../app/(tabs)/search';
import { icons } from '@/constants/icons';


interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string; 
  onChangeText?: (text: string) => void; // question mark makes them optional

}

const SearchBar = ({ placeholder,  onPress,value, onChangeText }: Props) => {
  return (
    <View className='flex-row items-center border-2 border-white bg-dark-200 rounded-full px-5 py-1'>
      {/* <Text>SearchBar</Text> */}
      <Image
        source={icons.search}
        style={{
          width: 20,         // Adjusted for visibility
          height: 20,        // Adjusted for visibility
          //   marginTop: 90,
          //   marginBottom: 5,
          //   alignSelf: 'center' // Correct way to center horizontally
        }}
        resizeMode='contain' tintColor='white'
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor='white'
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar