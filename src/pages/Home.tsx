import {ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchUsersFromApi} from "../services/userService.ts";
import Layout from "./Layout.tsx";

function Home() {
    type User = {
        id: number;  // or string, depending on your API
        name: string;
    };

    let [users, setUsers] = useState<User[]>([]);

    const userClicked = (userId: number) => {
        console.log('user clicked', userId)
    }

    const fetchUsers = async () => setUsers(await fetchUsersFromApi());
         
    useEffect(() => {
        return () => {
            fetchUsers();
        }
    }, []);

    if (!users.length) {
        return 'Loading user list...';
    }

    return (
        <Layout>
            <ListGroup>
                {users.map((user) => (
                    <ListGroup.Item key={user.id} onClick={() => userClicked(user.id)}>{user.name}</ListGroup.Item>
                ))}
            </ListGroup>
        </Layout>
    );
}

export default Home;
