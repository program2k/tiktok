import Home from "../pages/Home";
import Search from "../pages/Search/Search";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import HeaderOnly from "../components/Layout/HeaderOnly/HeaderOnly";
import Profile from "../pages/Profile/Profile";
import Live from "../pages/Live/Live";
import routesConfig from "../config/routes";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
