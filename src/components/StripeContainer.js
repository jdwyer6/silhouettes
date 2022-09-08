import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = 'pk_test_51LW3OKBOqjNupvMaYVfUK1vLD9auPFY1EtzTXrOoSylvZJHORLrxU0n0whFWDnzqU56sZD12hJp5qMorWEQ9A3KC003xrKKiiA'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(){
    return (
        <div>
            <Elements stripe={stripeTestPromise}>
                <PaymentForm />
            </Elements>
        </div>
    )
}