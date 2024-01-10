import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import propTypes from "prop-types";

import Tippy from "@tippyjs/react/headless";
import Popper from "../Popper/Popper";
import PreviewAccount from "./PreviewAccount/PreviewAccount";

const cx = classNames.bind(styles);

export default function AccountItem() {
  const renderPreview = () => {
    return (
      <div className={cx("preview")}>
        <Popper>
          <PreviewAccount />
        </Popper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[200, 0]}
        offset={[-20, 0]}
        placement="bottom-start"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className="avatar"
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/37fecb6b88f8b37f78603689a4e9da84~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1704859200&x-signature=S16NBhBDsuNf0HUj6nneIccfqU8%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>goncmi_</strong>
              <i className="check fa-solid fa-circle-check"></i>
            </p>
            <p className={cx("name")}>ngọc mie</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {
  label: propTypes.string.isRequired,
};
