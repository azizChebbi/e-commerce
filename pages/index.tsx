import type { NextPage } from "next";
import Layout from "../containers/Layout";
import ImageCarousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import Ads from "../components/home/Ads";
import BestSellsCarouselComponent from "../components/home/BestSells";

const Home: NextPage = () => {
    return (
        <Layout title='Home'>
            <>
                <ImageCarousel />
                <Categories />
                <Ads />
                <BestSellsCarouselComponent />
            </>
        </Layout>
    );
};

export default Home;

/*

*/
