import { Suspense } from "react"
import Spinner from "../(components)/Spinner"
import OrderList from "./(components)/OrderList"

function OrderPage({ searchParams }: {
  searchParams: { [key: string]: number | string | string[] | undefined }
}) {
  return (
    <div className="flex w-full flex-col items-center gap-5">
      <h1 className="mt-10 text-5xl"> Ongoin Orders 🍔</h1>
      <Suspense fallback={Spinner()} key={`search_${searchParams.page}`}>
        <OrderList page={searchParams.page as number} />
      </Suspense>
    </div>
  )

}
export default OrderPage