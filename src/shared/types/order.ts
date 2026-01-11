import { OrderItemDTO } from "./order-item";

export type OrderDTO = {
  id: number;
  franchisee_id: number;
  orders: OrderItemDTO[];
  createdAt: string;
};
