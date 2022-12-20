import axios from "axios";

const TOKEN = localStorage.getItem("token");

class OrderService {
  placeOrder(order) {
    return axios.post(`http://localhost:8088/orders?token=${TOKEN}`, order);
  }

  getOrderByUser(id) {
    //for an ordinary customer passing the id is optional but if admin wants to list orders which belongs to a particular customer then passing the proper user id is mandatory
    return axios.get(`http://localhost:8088/orders/${id}?token=${TOKEN}`);
  }

  getAllOrders() {
    return axios.get(`http://localhost:8088/orders?token=${TOKEN}`);
  }

  updateOrder(orderDto) {
    return axios.put(
      `http://localhost:8088/updateorder?token=${TOKEN}`,
      orderDto
    );
  }
}

export default new OrderService();
