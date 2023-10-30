function FeatureCard({ icon, heading, description }: any) {
  return (
    <>
      <div className='icon bg-color-1 active d-flex justify-content-center align-items-center mb-2'>
        <span className={`${icon}`}></span>
      </div>
      <div className='media-body'>
        <h3 className='heading'>{heading}</h3>
        <span>{description}</span>
      </div>
    </>
  )
}

export default FeatureCard
