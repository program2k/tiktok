import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import propTypes from "prop-types";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <img className={cx("avatar")} src={data.avatar} alt={data.full_name} />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && <i className="check fa-solid fa-circle-check"></i>}
        </p>

        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: propTypes.object,
};

// export default AccountItem;
