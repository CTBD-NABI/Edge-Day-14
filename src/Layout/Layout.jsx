import Footer from "../components/Footer"
import Header from "../components/Header"
import { Helmet } from "react-helmet";

const Layout = ({ children, title }) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Header />
            <main style={{ height: "80vh" }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout