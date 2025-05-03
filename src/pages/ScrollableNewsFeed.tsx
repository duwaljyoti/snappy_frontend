// ScrollableNewsFeed.tsx
import Layout from "./Layout.tsx";
import styles from "./ScrollableNewsFeed.module.scss";

// Swiper core & required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// Dummy data for now
const dummyItems: string[] = [
    "Breaking News: Market hits all-time high",
    "Sports Update: City Team wins championship",
    "Weather Alert: Heavy rains expected tomorrow",
    "Tech: New flagship smartphone announced",
    "Entertainment: Award show highlights and winners",
    "Health: Tips for a balanced diet",
    "Travel: Top 10 hidden gems to visit in 2025"
];

const ScrollableNewsFeed = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={10}
                    mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
                    scrollbar={{ draggable: true }}
                    modules={[Mousewheel, Scrollbar]}
                    className={styles.swiper}
                >
                    {dummyItems.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={styles.slide}>{item}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Layout>
    );
};

export default ScrollableNewsFeed;
