import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./Response";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "./Component/Search";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  //const data=Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="search_pagelogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt=""
          />{" "}
        </Link>
      </div>
      <div className="searchPage_headerbody">
        <Search hideButtons />
        <div className="searchpage_options">
          <div className="searchPage_optionleft">
            <div className="searchPage_option">
              <SearchIcon />
              <Link to="/all">ALL</Link>
            </div>
            <div className="searchPage_option">
              <SearchIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage_option">
              <SearchIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage_option">
              <SearchIcon />
              <Link to="/shopping">shopping</Link>
            </div>
            <div className="searchPage_option">
              <SearchIcon />
              <Link to="/maps">Maps</Link>
            </div>
            <div className="searchPage_option">
              <SearchIcon />
              <Link to="/more">More</Link>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="searchPage_results">
          {data?.items.map((item) => (
            <div className="searchPage_results">
              <a href={item.link}>{item.displayLink}</a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
