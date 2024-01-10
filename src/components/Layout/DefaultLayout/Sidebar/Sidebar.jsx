import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

import routesConfig from "../../../../config/routes";

import { HomeIcon, UserGroupIcon, LiveIcon } from "../../../icon/Icon";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import SuggestedAccounts from "../../../SuggestedAccounts/SuggestedAccounts";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title="For You" to={routesConfig.home} icon={<HomeIcon />} />
        <MenuItem
          title="Following"
          to={routesConfig.following}
          icon={<UserGroupIcon />}
        />
        <MenuItem title="LIVE" to={routesConfig.live} icon={<LiveIcon />} />
      </Menu>

      <SuggestedAccounts label="Suggested account" />
      <SuggestedAccounts label="Following account" />
    </aside>
  );
}
