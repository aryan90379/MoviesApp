import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { Image } from 'expo-image'
import { icons } from '@/constants/icons'


// import { icons } from './../../constants/icons';
const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {

        return (
            <ImageBackground
                source={images.highlight}
                className='flex flex-row w-full align-middle flex-1 min-w-[95] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'
            >
                {/* <Image source={icon} tintColor="#151312" className="size-5" /> */}
                <Image
                    source={icon}
                    tintColor="#151312"
                    style={{ width: 20, height: 20, } }
                     // React Native uses `style`, not `className`
                />


                <Text className="text-secondary ml-1 text-base font-semibold">{title}</Text>
            </ImageBackground>
        );
    }
    else {
        return (
            <View className='size-full justify-center items-center mt-4 rounded-full'>
                <Image
                    source={icon}
                    tintColor="#151312"
                    style={{ width: 20, height: 20,tintColor: 'white' } }
                     // React Native uses `style`, not `className`
                />
            </View>

        );


    }
};



const _layout = () => {
    // console.log(icons.home,images.highlight)

    return (
        <Tabs  screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'

            },
            tabBarStyle: {
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '#0f0d23'

            }
        }}>
            <Tabs.Screen // hides the header of that specfic screen

                name="index" // keep the same name as how you named the files as
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (

                        <TabIcon focused={focused} icon={icons.home} title="Home" />

                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (

                        <TabIcon focused={focused} icon={icons.search} title="Search" />
                    )
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: "saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (

                        <TabIcon focused={focused} icon={icons.save} title="Saved" />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: "profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (

                        <TabIcon focused={focused} icon={icons.person} title="Profile" />
                    )
                }}
            />

        </Tabs>

    )
}

export default _layout