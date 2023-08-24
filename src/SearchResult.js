import SearchCard from "./SearchCard"
import "./index.css"

function SearchResult({ dataArray }) {
  const renderCards = dataArray.map((item) => {
    return <SearchCard key={item.id} data={item.fields}></SearchCard>;
  })

  return (
    <div className="container">
      <div className="row">
        {renderCards}
      </div>
    </div>
  )
}

export default SearchResult