import Link from "next/link"
import { getAllOrders } from "../order"

async function OrderListChef({ type }: { type: string | undefined }) {
  const { orders } = await getAllOrders({ type })
  const types = ["ongoing", "completed"]
  return (
    <>
      <div className="join">
        {types.map((typePage) => {
          return (
            <>
              <Link
                key={`page_${typePage}`}
                className={`btn join-item ${type === typePage ? "btn-active" : ""}`}
                href={`/order/chef?type=${typePage}`}>
                {typePage}
              </Link>
            </>
          )
        })}
      </div>
      <div className="flex flex-col gap-3">
        {orders?.map((order) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{order.name}</h2>
                <p>{order.menus[0]?.name}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success">Complete</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
export default OrderListChef