
import './App.scss';

function App() {
  return (
    <div className=" main-container">
      <div className="container-fluid">
        <div className="row  info">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="row d-flex ">
              <div className="col-12 d-flex my-5">
                <span className='main-info'>
                  Get <span className='main-info-colored'>
                    insight
                  </span> that help your business grow.
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex mb-5">
                <span className='info-paragraph'>
                  Discover the benefits of data analytics and make better decisions regarding revenue, customer experlence, and overall efficiency.
                </span>
              </div>
            </div>
            <div className="row info-stats-container mt-5">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center">
                <div className="info-stats">
                  <span className="info-stats-title">
                    10k+
                  </span>
                  <span className="info-stats-value">
                    COMPANIES
                  </span>
                </div>

              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center">
                <div className="info-stats">
                  <span className="info-stats-title">
                    314
                  </span>
                  <span className="info-stats-value">
                    TEMPLATES
                  </span>
                </div>

              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center">
                <div className="info-stats">
                  <span className="info-stats-title">
                    12M+
                  </span>
                  <span className="info-stats-value">
                    QUERIES
                  </span>
                </div>

              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 background-img px-0">
            {/* <img className='w-100' src={require("./assets/image-header-desktop.jpg")} alt="" /> */}
            <div className='img w-100'></div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
