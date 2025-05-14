import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View className='bg-primary flex-1 px-6 pt-10'>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Profile Picture */}
        <View className='flex items-center justify-center mt-8'>
          <Image
            source={{
              uri: 'https://i.pravatar.cc/150?img=12', // Replace with user image
            }}
            className='w-28 h-28 rounded-full border-4 border-white'
          />
          <Text className='text-white text-xl font-bold mt-4'>Aryan Sharma</Text>
          <Text className='text-light-200 text-sm mt-1'>Premium Member</Text>
        </View>

        {/* Profile Stats */}
        <View className='flex-row justify-between mt-8 bg-dark-100 rounded-xl px-5 py-4'>
          <View className='items-center'>
            <Text className='text-white font-bold text-lg'>124</Text>
            <Text className='text-light-200 text-sm'>Movies Watched</Text>
          </View>
          <View className='items-center'>
            <Text className='text-white font-bold text-lg'>23</Text>
            <Text className='text-light-200 text-sm'>Favorites</Text>
          </View>
          <View className='items-center'>
            <Text className='text-white font-bold text-lg'>4.9</Text>
            <Text className='text-light-200 text-sm'>Avg Rating</Text>
          </View>
        </View>

        {/* Account Options */}
        <View className='mt-10'>
          {[
            { label: 'Edit Profile', icon: '📝' },
            { label: 'My Subscriptions', icon: '💳' },
            { label: 'App Settings', icon: '⚙️' },
            { label: 'Help & Support', icon: '❓' },
            { label: 'Logout', icon: '🚪' },
          ].map((item, index) => (
            <TouchableOpacity key={index} className='flex-row items-center justify-between bg-dark-100 rounded-lg px-4 py-3 mb-3'>
              <Text className='text-white text-base'>{item.icon} {item.label}</Text>
              <Text className='text-light-200 text-lg'>{'>'}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile
