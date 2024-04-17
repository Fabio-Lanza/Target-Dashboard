import React from "react";
import { recentOrderData } from "./../../Utils/conts/RecentOrderData";

const RecentOrders = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 border border-gray-200 flex-1">
      <strong className="text-gray-500 font-medium">Recent Order</strong>
      <div className="mt-3">
        <table className="w-full text-gray-500 ">
          <thead className="">
            <tr>
              <td>ID</td>
              <td>Product ID</td>
              <td>Customer Name</td>
              <td>Order Date</td>
              <td>Order Total</td>
              <td>Shipping Address</td>
              <td>Order Status</td>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product_id}</td>
                <td>{order.customer_name}</td>
                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                <td>{order.order_total}</td>
                <td>{order.shipment_address}</td>
                <td>{order.current_order_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
