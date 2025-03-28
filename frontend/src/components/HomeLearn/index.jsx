import SidebarMenu from "./SidebarMenu"
import MainContent from "./MainContent";
import DashboardRight from "./DashboardRight";
import Header from "@/components/Header";

function HomeLearn() {
    return (
        <div className="bg-white">
            <Header />
            <div className="flex m-4 gap-6">
                <div className="flex-1">
                    <SidebarMenu />
                </div>
                <div className="flex-2">
                    <MainContent />
                </div>
                <div className="flex-1">
                    <DashboardRight />
                </div>
            </div>
        </div>
    );
}

export default HomeLearn;