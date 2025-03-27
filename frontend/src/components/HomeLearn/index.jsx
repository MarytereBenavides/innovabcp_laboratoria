import SidebarMenu from "./SidebarMenu"
import MainContent from "./MainContent";
import DashboardRight from "./DashboardRight";
function HomeLearn() {
    return (
        <div className="flex m-4 gap-6">
            <div className="flex-1">
                 <SidebarMenu />
            </div>
            <div className="grow-7">
                <MainContent />
            </div>
            <div className="flex-1">
                <DashboardRight />
            </div>
        </div>
    );
}

export default HomeLearn;