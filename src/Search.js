import { useCookies } from 'react-cookie';
import { getData } from './api';
import './index.css';
import SearchResult from './SearchResult';
import useAuthentication from './hooks/useAuthenticationContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [cookies] = useCookies(['jwt']);
  const { jwt, data, setAuthState } = useAuthentication();
  const [searchError, setsearchError] = useState(null);
  const navigate = useNavigate()

  const handleSearch = async () => {
    try {
      let requestData = await getData(cookies.jwt);
      setAuthState({
        data: requestData,
        jwt,
        loading: null,
        error: null,
      })
      setsearchError(null);
      // My approach if Product Search API intermittently through exception.
      // I save the data into localStorage.
      //  Once user successfully get the search response, even if they offline, they can still browse the data in their browser.
      localStorage.setItem('data', JSON.stringify(requestData));
    } catch (error) {
      // My approach if the Product Search API is down.
      // I will navigate to the 404 webpage
      setsearchError(error.message);
      if (error.status === 404) {
        navigate("*")
      }
    }
  };

  const renderData = () => {
    if (data && data.hits && data.hits.hit) {
      return <SearchResult dataArray={data.hits.hit}></SearchResult>
    }
    else if (localStorage.getItem('data')) {
      const backupData = JSON.parse(localStorage.getItem('data'));
      return <SearchResult dataArray={backupData.hits.hit}></SearchResult>
    }else {
      return null;
    }
  };


  return (
    <div>
      <div className='SearchButton'>
        <div className="d-flex justify-content-center mt-10">
          <button className="btn btn-primary p-10 mt-10 " onClick={handleSearch}>Search</button>
        </div>
        <div className="d-flex justify-content-center mt-10">
          <p style={{ color: "red" }}>{searchError}</p>
        </div>
      </div>
      {renderData()}
    </div>
  );
}

export default Search;
