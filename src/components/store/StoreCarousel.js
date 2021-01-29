import React, { useState, useEffect } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Banner from '../Banner';

const CAROUSEL_HZ_OUTPUT = 56;

const StoreCarousel = ({ banners, fetchBanners }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { width: windowWidth } = useWindowDimensions();
  const carouselItemWidth = windowWidth - CAROUSEL_HZ_OUTPUT;

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  if (banners.length === 0) { return null; }

  const renderBanner = ({ item }) => {
    const { title, info, image } = item;
    return (
      <Banner
        bannerWidth={carouselItemWidth}
        title={title}
        info={info}
        image={image}
      />
    );
  };

  const renderPagination = () => (
    <Pagination
      dotsLength={banners.length}
      activeDotIndex={activeSlide}
      dotStyle={styles.dotsLength}
      containerStyle={styles.paginationContainer}
    />
  );

  return (
    <View>
      <Carousel
        data={banners}
        renderItem={renderBanner}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={windowWidth}
        itemWidth={carouselItemWidth}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  paginationContainer: {
    paddingVertical: 8,
  },
});

const mapStateToProps = (state) => ({
  banners: state.store.banners,
});

const mapDispatchToProps = {
  fetchBanners: actions.fetchBanners,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreCarousel);
