function SearchCard({ data }) {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card d-flex flex-column">
        <img src={`https://picsum.photos/seed/${data.date}/200/300`} className="card-img-top" alt="feature" />
        <div className="card-body">
          <h5 className="card-title customTitle">{data.title}</h5>
          <p className="card-text">{data.venue_city}</p>
          <p className="card-text">{data.when}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Product Type: {data.product_types.join(',')}</li>
          <li className="list-group-item">Venue Name: {data.venue_name}</li>
        </ul>
        <div className="card-body">
          <a href={data.Purchase} className="card-link">
            <button className="btn btn-primary">Purchase</button>
          </a>
          {/* <a href="#" className="card-link">Another link</a> */}
        </div>
      </div>
    </div>
  )
}

export default SearchCard;