import { getAllOrders } from "../order"

async function OrderListChef() {
  const { orders } = await getAllOrders()
  return (
    <>
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