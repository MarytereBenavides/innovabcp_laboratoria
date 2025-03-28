'use client'
import React from "react";
import SidebarMenu from "./SidebarMenu"
import MainContent from "./MainContent";
import DashboardRight from "./DashboardRight";
import Header from "@/components/Header";
import AvatarButton from "./AvatarButton";

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
             <AvatarButton/>
        </div>
    );
}

export default HomeLearn;