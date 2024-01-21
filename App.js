import CarouselBanner from './src/components/carousel/carousel-banner';
import CarouselExclusive from './src/components/carousel/carousel-exclusive'
import Register from './src/layouts/navbar/navbar';
import Navbar from './src/layouts/navbar/navbar';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      {/* <Layout className={`App w-full h-full`}> */}
        <View style={styles.container}>
          <Navbar/>
          <Routes>
            <Route path="/" element={
              <div className='content'>
                <CarouselBanner/>
                <CarouselExclusive />
              </div>} />
              <Route path='/register' element={<Register />} />
          </Routes>
          <Text>Open up App.js to start working on your app in this!</Text>
        </View>
      {/* </Layout> */}
    </Router>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
