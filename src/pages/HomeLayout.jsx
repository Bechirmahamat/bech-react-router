import { Link, Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../component/Navbar";

const HomeLayout = () => {
    const navigation = useNavigation();
    // console.log(navigation);
    return (
        <div>
            <Navbar />
            <main className="pages">
                {navigation.state === "loading" ? (
                    <div className="loading center" />
                ) : (
                    <Outlet />
                )}
            </main>
        </div>
    );
};
export default HomeLayout;
