
import { Suspense } from "react"
import Spinner from "@/app/(components)/Spinner"
import OrderListChef from "../(components)/OrderListChef"

function OrderPageChef() {

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <h1 className="mt-10 text-5xl"> Ongoin Orders 👨‍🍳</h1>
      <Suspense fallback={Spinner()}>
        <OrderListChef />
      </Suspense>
    </div>
  )

}
export default OrderPageChef