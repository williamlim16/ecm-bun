import Link from "next/link"
import { getOrders } from "../order"

async function OrderList({ page = 0 }: { page: number }) {
  if (page !== 0) {
    page = page - 1
  }
  const { orders, countOngoingOrder } = await getOrders({ page })
  const pages = []
  for (let i = 0; i < Math.ceil(countOngoingOrder.done / 10); i++) {
    pages.push(i + 1)
  }
  return (
    <>
      <div className="join">
        {pages.map((pageNumber) => {
          return (
            <>
              <Link key={`page_${pageNumber}`} className={`btn join-item ${pageNumber - 1 === page ? "btn-active" : ""}`} href={`/order?page=${pageNumber}`}>
                {pageNumber}
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
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
export default OrderList