import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import Popper from "../Popper/Popper";
import AccountItem from "../AccountItem/AccountItem";
import search from "../../api_services/searchServices";

import { useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const cx = classNames.bind(styles);

export default function Search() {
  const inputRef = useRef();

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await search(debouncedSearch);
      setSearchResult(result.data);

      setLoading(false);
    };

    fetchApi();
  }, [debouncedSearch]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <Popper>
              <h4 className={cx("search-title")}>Accounts</h4>
              {searchResult.map((result) => {
                return <AccountItem key={result.id} data={result} />;
              })}
            </Popper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />

          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
          )}

          {loading && <i className={cx("loading fa-solid fa-spinner")}></i>}

          <button className={cx("search-btn")}>
            <i className="fa-solid fa-magnifying-glass "></i>
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}
