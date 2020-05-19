export interface ICustomer {
  id: number;
  name: string;
  city: string;
  //question mark makes it optional
  orderTotal?: number;
  customerSince: any;
}

export interface IOrder {
  customerId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
