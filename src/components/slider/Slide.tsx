export function Slide(props: any) {
  const { imgUrl, heading, subheading } = props
  console.log(props)
  return (
    <>
      <div className='slider-item' style={{ backgroundImage: `url("${imgUrl}")` }}>
        <div className='overlay'></div>
        <div className='container'>
          <div className='row slider-text justify-content-center align-items-center' data-scrollax-parent='true'>
            <div className='col-md-12 ftco-animate text-center'>
              <h1 className='mb-2'>{heading}</h1>
              <h2 className='subheading mb-4'>{subheading}</h2>
              <p>
                <a href='#' className='btn btn-primary'>
                  View Details
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
