import { Link, Outlet, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Stroage from "./pages/Stroage";
import Sidebar from "./layouts/sidebar";

export const Index = () => {
  return (
    <>
    {/* <Sidebar/> */}
    <div className="flex gap-5">
      {/* <Sidebar /> */}
      <div className="">
      <Link to={'stroage'}>stroage</Link>
      <Link to={'authentication'}>authentication</Link>
      </div>
      <main className="max-w-5xl flex-1 mx-auto py-4">  </main>
    </div>
    <Outlet />
    </>
  );
};

