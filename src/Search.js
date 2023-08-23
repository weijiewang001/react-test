import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from './api';
import './index.css';
import SearchResult from './SearchResult';

function Search() {
  const [cookies, setCookies] = useCookies(['jwt']);
  const [data, setData] = useState({})


  const handleSearch = () => {
    console.log(cookies.jwt)
    getData(cookies.jwt)
    if (localStorage.getItem('data')) {
      setData({
        ...data,
        ...JSON.parse(localStorage.getItem('data'))
      })
    }
  }

  const result = () => {
    if (data.hits.hit) {
      return <h1>gppd</h1>
    } else {
      console.log("good")
      return null
    }
  }

  return (
    <div>
      <div className='SearchButton'>
        <div className="d-flex justify-content-center mt-10">
          <button className="btn btn-primary p-10 mt-10" onClick={handleSearch}>Search</button>
        </div>
      </div>
      {data.hits.hit ? <SearchResult></SearchResult> : null}


    </div>


  );
}

export default Search;
