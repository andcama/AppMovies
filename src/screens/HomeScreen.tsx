import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { View, ActivityIndicator, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { nowPlaying, isLoading ,popular,topRated,upcoming } = useMovies();
  const { top } = useSafeAreaInsets();
  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (

    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View style={{ height: 440 }}>
          <Carousel data={nowPlaying} renderItem={({ item }: any) => <MoviePoster movie={item} />} sliderWidth={windowWidth} itemWidth={300} inactiveSlideOpacity={0.9} />
        </View>

       {/* Popular Movies */}
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  )
}
