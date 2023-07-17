import "./App.css";

import Header from "./compodents/layer/header";
import Content1 from "./compodents/layer/content1";
import Content2 from "./compodents/layer/content2";
import Footer from "./compodents/layer/footer";
import Layout from "./compodents/layer";
import Button from "./compodents/button";
import CardList from "./compodents/cardList";
import ChartList from "./compodents/chartList";

import ButtonAccordHwS4 from "./compodents/buttonAccordHwS4";
import ElementTabHwS4 from "./compodents/elementTabHwS4";

import SlideImage from "./compodents/sildeImage";
import LikeButtonAnimation from "./compodents/likeButtonAnimation";

import MusicOlayList from "./compodents/musicPlayList";

function App() {
  return (
    <div className="App">
      {/* <Header />  */}
      {/* <Footer />  */}
      {/* <Layout
        contentHeader="Xin chào, đây là header"
        
        contentFooter="Xin chào, đây là footer"
        >
        <Content1 />
        
        <Content2 />
        <Button
          icon={<i class="fa-brands fa-apple fa-xl" />}
          
          name="Continue with Apple"
          
          classes="bg-white"
        />
        <Button
          icon={<i class="fa-brands fa-apple fa-xl" />}
          
          name="Continue with Apple"
          
          classes1="bg-black"
        />
      </Layout>
        */}

      {/* <CardList /> */}

      {/* <ChartList />  */}
      {/* bài tập 1 */}
      <ButtonAccordHwS4 />
      <ElementTabHwS4 />
      <SlideImage />
      <LikeButtonAnimation />



      {/* list play */}
      {/* <MusicOlayList /> */}
    </div>
  );
}

export default App;
