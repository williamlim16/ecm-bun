import { getOrders } from "../order"

async function OrderList() {
  const orders = await getOrders()
  return (
    <>
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