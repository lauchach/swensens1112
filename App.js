import CarouselBanner from './src/components/carousel/carousel-banner';
import CarouselExclusive from './src/components/carousel/carousel-exclusive'
import Register from './src/pages/register/register';
import Navbar from './src/layouts/navbar/navbar';
import AppFooter from './src/layouts/footer/footer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

export default function App() {
  return (
    <Router>
      <ScrollView>
      <View style={styles.container}>
          <Navbar/>
          <Routes>
            <Route path="/" element={
              <div className='content'>
                <CarouselBanner/>
                <CarouselExclusive />
                <CarouselBanner/>
                <CarouselBanner/>
              </div>} />
              <Route path='/register' element={
              <Register />} />
          </Routes>
          <Text>Open up App.js to start working on your app in this!</Text>
          <AppFooter />
        </View>
        </ScrollView>
    </Router>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    flexDirection: 'column'
  }
})


