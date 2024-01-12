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
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/1d6ed1aa4a40477a5d056e30897c3991.jpeg?lk3s=a5d48078&x-expires=1705204800&x-signature=JhY8goTTDOtksVctdY95967MM%2FA%3D"
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
