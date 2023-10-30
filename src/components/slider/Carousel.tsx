export function Carousel() {
    return (
        <div className="home-slider owl-carousel">            
            <div className="slider-item" style={ { backgroundImage: `url("images/bg_1.jpg")` }} >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

                    <div className="col-md-12 ftco-animate text-center">
                        <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
                        <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                        <p><a href="#" className="btn btn-primary">View Details</a></p>
                    </div>

                    </div>
                </div>
            </div>

            <div className="slider-item" style={ { backgroundImage: `url("images/bg_2.jpg")` }} >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

                    <div className="col-sm-12 ftco-animate text-center">
                        <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>
                        <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                        <p><a href="#" className="btn btn-primary">View Details</a></p>
                    </div>

                    </div>
                </div>
            </div>
      </div>
    );
}