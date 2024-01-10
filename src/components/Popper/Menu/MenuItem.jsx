import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import Button from "../../Button/Button";

const cx = classNames.bind(styles);

export default function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", { separate: data.separate });

  return (
    <>
      <Button className={classes} to={data.to} onClick={onClick}>
        {data.icon}
        {data.title}
      </Button>
    </>
  );
}
