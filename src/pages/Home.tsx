import {ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchNewsFromApi, fetchUsersFromApi} from "../services/userService.ts";
import Layout from "./Layout.tsx";
import styles from "./Home.module.scss";
import utilities from './Utilities.module.scss';

function Home() {
    const defaultImage = 'https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg';
    type User = {
        id: number;  // or string, depending on your API
        name: string;
    };

    let [users, setUsers] = useState<User[]>([]);
    let [news, setNews] = useState<any[]>([]);

    const userClicked = (userId: number) => {
        console.log('user clicked', userId)
    }

    const fetchUsers = async () => setUsers(await fetchUsersFromApi());

    const fetchNews = async () => setNews(await fetchNewsFromApi());

    useEffect(() => {
        return () => {
            fetchUsers();
            fetchNews();
        }
    }, []);

    if (!users.length) {
        return 'Loading user list...';
    }

    return (
        <Layout>
            <ListGroup>
                {news.map((singleNews) => (
                    <ListGroup.Item
                        key={singleNews.id}
                        className={`${styles.singleNewsListItem} mb-4 p-3`}
                        onClick={() => userClicked(singleNews.id)}>
                        <div className={'d-flex'}>
                            <div className={'w-75'}>
                                <div
                                    className={`${styles.textAlignLeft} ${styles.singleNewsTitle} mb-2`}>
                                    <a href={`${singleNews.link || '#'}`}
                                       target='_blank'
                                    >{singleNews.title || '-'}</a>
                                </div>
                                <div className={`${styles.textAlignLeft}`}>{singleNews.description}</div>
                                <div className={`${utilities.smallFontSize} ${styles.textAlignLeft}`}>
                                    source: {singleNews.link}
                                </div>
                            </div>

                            <div
                                className={`${styles.imageDiv} mb-2`}
                            >
                                <img
                                    src={singleNews.image_url || defaultImage}
                                    alt=""/>
                            </div>

                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Layout>
    );
}

export default Home;
