import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from "./Siderbar.tsx";
import Container from "react-bootstrap/Container";
import styles from './Layout.module.scss';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Container fluid className="layout">
            <Header></Header>
            <div className="d-flex">
                <Sidebar></Sidebar>
                <main className={styles.mainClass}>
                    {children}
                </main>
            </div>
        </Container>
    );
};

export default Layout;
