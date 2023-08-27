function SearchCard({ data }) {

  const renderProductTypes = () => {
    return (
      <li className="list-group-item">Product Type: {data.product_types.join(', ')}</li>
    );
  };

  const renderSoldOutMessage = () => {
    if (data.is_sold_out && parseInt(data.is_sold_out)) {
      return <span className="soldOut">Sold out</span>;
    }
    return null;
  };

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card d-flex flex-column">
        <img src={`https://picsum.photos/seed/${data.date}/200/300`} className="card-img-top" alt="feature" />
        <div className="card-body">
          <div className="searchCardBody">
            <h5 className="card-title searchCardBody-title">{data.title}</h5>
            <span className="searchCardBody-sale">On Sale</span>
          </div>
          <p className="card-text">{data.venue_city}</p>
          <p className="card-text">{data.when}</p>
        </div>
        <ul className="list-group list-group-flush">
          {renderProductTypes()}
          {/* <li className="list-group-item">Product Type: {data.product_types.join(',')}</li> */}
          <li className="list-group-item">Venue Name: {data.venue_name}</li>
          <li className="list-group-item searchCardBody-refund">{data.allow_refund ? "Refundable" : "Not Refundable"}</li>
        </ul>
        <div className="card-body purchaseSection">
          <a href={data.Purchase} className="card-link">
            <button className="btn btn-primary" disabled={data.is_sold_out && parseInt(data.is_sold_out)}>Purchase</button>
          </a>
          {renderSoldOutMessage()}
          {/* {data.is_sold_out && parseInt(data.is_sold_out) ? <span className="soldOut">Sold out</span> : null} */}
        </div>
      </div>
    </div>
  )
}

export default SearchCard;