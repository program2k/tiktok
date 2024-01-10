import classNames from "classnames/bind";
import styles from "./PreviewAccount.module.scss";

import Button from "../../Button/Button";

const cx = classNames.bind(styles);

export default function PreviewAccount() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <img
          className="preview-avatar"
          src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/37fecb6b88f8b37f78603689a4e9da84~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1704859200&x-signature=S16NBhBDsuNf0HUj6nneIccfqU8%3D"
          alt=""
        />
        <Button primary>Follow</Button>
      </header>
      <div className={cx("preview-item-info")}>
        <p className={cx("preview-nickname")}>
          <strong>goncmi_</strong>
          <i className="check fa-solid fa-circle-check"></i>
        </p>
        <p className={cx("preview-name")}>ngọc mie</p>
        <span className={cx("followers")}>
          <strong>1M</strong> Followers
        </span>
        <span className={cx("likes")}>
          <strong>10M</strong> Likes
        </span>
      </div>
    </div>
  );
}
