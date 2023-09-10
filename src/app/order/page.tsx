import { Suspense } from "react"
import Spinner from "../(components)/Spinner"
import OrderList from "./(components)/OrderList"

function OrderPage() {

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <h1 className="mt-10 text-5xl"> Ongoin Orders 🍔</h1>
      <Suspense fallback={Spinner()}>
        <OrderList />
      </Suspense>
    </div>
  )

}
export default OrderPage