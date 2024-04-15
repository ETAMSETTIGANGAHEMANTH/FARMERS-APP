import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  return (
    <div className="">
      <h1 className=' fs-1 text-center mt-4 main-heading-home'>  <span className="m">E</span>-Farming <span className="m">P</span>ortal</h1>
      <div id="carouselExampleIndicators" className="carousel slide carousel-background-style">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner container" >
    <div className="carousel-item active">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                  
                    <p className='text-dark home-para-style fs-4'>The soil is the great connector of lives, the source and destination of all</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://i0.wp.com/explicitsuccess.com/wp-content/uploads/2019/09/farmer-1.jpg?fit=960%2C685&ssl=1" className="d-block w-100 " height="400px" alt="..."/>
            </div>

        </div>
    </div>
    <div className="carousel-item">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                 
                    <p className='home-para-style fs-4 text-dark'>Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpowogsCWKR5KUM24X0AVF_dlmfZKy0RnxnA&usqp=CAU" className="d-block w-100 " height="400px" alt="..."/>
            </div>

        </div>
    </div>
    <div className="carousel-item ">
    <div className='row'>
            <div className='col-sm-6 text-center'>
                
                <div className='h-100  d-flex flex-column justify-content-center'>
                    <p className='text-dark home-para-style fs-4'>The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings</p>

                </div>

            </div>
            <div className='col-sm-6 p-5' >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZzgnGV4qh9-1xWO-xQn_rJuhI923W62kgQ&usqp=CAU" className="d-block w-100 " height="400px" alt="..."/>
            </div>

        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}

export default Home;
