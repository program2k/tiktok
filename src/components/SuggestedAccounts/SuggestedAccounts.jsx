import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import propTypes from "prop-types";

import AccountItem from "./AccountsItem";

const cx = classNames.bind(styles);

export default function SuggestedAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("lable")}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={cx("see-all")}>See all</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: propTypes.string.isRequired,
};
