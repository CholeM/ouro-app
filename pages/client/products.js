import React from 'react';
import Container from 'react-bootstrap/Container'
import ClientLayout from '../../components/admin/clientLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const products = [
  {id: "1", product: "DesignFlow"},
  {id: "2", product: "HotelierPro"},
  {id: "3", product: "SwiftSell"},
];

const productUpdates = [
  {
    id: "1", 
    product: "DesignFlow",
    name: "DesignFlowJanUpdate.exe",
    date: "2021-01-05",
    icon: <a href="#"><i className="text-success"><FontAwesomeIcon icon={faDownload} /></i></a>,
  },
  {
    id: "2", 
    product: "SwiftSell",
    name: "SwiftSellJanUpdate.exe",
    date: "2021-01-05",
    icon: <a href="#"><i className="text-success"><FontAwesomeIcon icon={faDownload} /></i></a>,
  },
  {
    id: "3", 
    product: "SwiftSell",
    name: "SwiftSellFebUpdate.exe",
    date: "2021-02-05",
    icon: <a href="#"><i className="text-success"><FontAwesomeIcon icon={faDownload} /></i></a>,
  },
  {
    id: "4", 
    product: "HotelierPro",
    name: "HotelierProJanUpdate.exe",
    date: "2021-01-05",
    icon: <a href="#"><i className="text-success"><FontAwesomeIcon icon={faDownload} /></i></a>,
  },
  {
    id: "5", 
    product: "DesignFlow",
    name: "DesignFlowFebUpdate.exe",
    date: "2021-02-05",
    icon: <a href="#"><i className="text-success"><FontAwesomeIcon icon={faDownload} /></i></a>,
  }
];

const Products = () => {
  const handleFilter = (name) => {
    let filtered;
    if (name == "All") {
      filtered = productUpdates 
      return filtered;
    } else {
      filtered = productUpdates.filter(x => x.product == name);
      return filtered;
    }
  }

  return (
    <ClientLayout>
      <main>
        <Container>
          <div className="row">
            <div className="col-md-10">
              <h1>
                My Products
              </h1>
            </div>
          </div>

          <div className="card card-custom">
            <div className="card-body">
              <div className="form-group mb-5">
                <label>
                  <h3>Product List</h3>
                </label>
                <div className="row">
                  <div className="col-lg-3">
                    <label className="option">
                      <span className="option-control">
                        <span className="radio">
                          <input name="product" type="radio" value="All" />
                          <span></span>
                        </span>
                      </span>
                      <span className="option-label">
                        <span className="option-head">
                          <span className="option-title">
                            All Products
                          </span>
                        </span>
                        <span className="option-body">
                          View all available product updates
                        </span>
                      </span>
                    </label>
                  </div>
                  {products.length > 0 ? (
                    <>
                      {products.map(x => (
                        <div key={x.id} className="col-lg-3">
                          <label className="option">
                            <span className="option-control">
                              <span className="radio">
                                <input type="radio" name="product" value={x.product} />
                                <span></span>
                              </span>
                            </span>  
                            <span className="option-label">
                              <span className="option-head">
                                <span className="option-title">
                                  {x.product}
                                </span>
                              </span>
                              <span className="option-body">
                                View all {x.product} updates
                              </span>
                            </span>
                          </label>
                        </div>
                      ))}
                    </>
                  ) : (
                    <span class="text-center">No products assigned</span>
                  )}
                </div>
              </div>
              
              <h3>Product Updates</h3>
              <div className="table-responsive">
                <table className="table table-separate table-head-custom">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Update Name</th>
                      <th>Update Date</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productUpdates.length > 0 ? (
                      <>
                        {productUpdates.map(x => (
                          <tr key={x.id} className="dataRow">
                            <td className="product">{x.product}</td>
                            <td>{x.name}</td>
                            <td>{x.date}</td>
                            <td>
                              {x.icon}
                            </td>
                          </tr>
                        ))}
                      </>
                    ): (
                      <tr>
                        <td colspan="4" class="text-center">No record found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </ClientLayout>
  )
}

export default Products;