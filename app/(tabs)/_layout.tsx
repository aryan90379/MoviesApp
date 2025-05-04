import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { Image } from 'expo-image'
import { icons } from '@/constants/icons'
const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen // hides the header of that specfic screen

                name="index" // keep the same name as how you named the files as
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <ImageBackground
                                source={images.highlight}
                                className='flex flex-row w-full flex-1 min-w-[112] min-h-14 mt-4 justify-center items-center rounded-3xl overflow-hidden'
                            >

                                
                                <Image source={icons.home} tintColor="#151312" className="size" />
                                <Text className="text-white">Home</Text>

                            </ImageBackground>
                        </>

                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: "Search",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: "saved",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: "profile",
                    headerShown: false,
                }}
            />

        </Tabs>

    )
}

export default _layout