import FeatureCard from '../components/FeatureCard'

function OurFeatures() {
  const desc = [
    {
      icon: 'flaticon-shipped',
      heading: 'Free Shipping',
      desc: 'On order over $100'
    },
    {
      icon: 'flaticon-diet',
      heading: 'Always Fresh',
      desc: 'Product well package'
    },
    {
      icon: 'flaticon-award',
      heading: 'Superior Quality',
      desc: 'Quality Products'
    },
    {
      icon: 'flaticon-customer-service',
      heading: 'Support',
      desc: '24/7 Support'
    }
  ]
  return (
    // <!-- ====== Fatures Start ====== -->
    <section className='ftco-section'>
      <div className='container'>
        <div className='row no-gutters ftco-services'>
          {desc.map((item, index) => {
            const { icon, heading, desc } = item
            return (
              <div key={index} className='col-md-3 text-center d-flex align-self-stretch ftco-animate'>
                <div className='media block-6 services mb-md-0 mb-4'>
                  <FeatureCard icon={icon} heading={heading} description={desc} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    // <!-- ====== Feature End ====== -->
  )
}

export default OurFeatures
