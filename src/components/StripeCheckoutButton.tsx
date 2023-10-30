import StripeCheckout from 'react-stripe-checkout'
import { toast } from 'react-toastify'

interface IProps {
  price: number
  onSuccess: (token: any) => void
}

function StripeCheckoutButton({ price, onSuccess }: IProps) {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_waYSC93xSL0dx7nRsq8Lyk8R00q7O3nLzA'

  const notify = () => toast.success(`Checkout successfully. We are processing your order.`)

  const onToken = (token: any) => {
    notify()
    onSuccess(token)
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Vegefoods'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
export default StripeCheckoutButton
