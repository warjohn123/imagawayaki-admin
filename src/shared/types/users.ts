export type UserDTO = {
  id: number;
  name: string;
  email: string;
  role: "franchisee" | "admin" | "order_collector" | "commissary_staff";
  created_at: string;
};

export type FranchiseeDTO = {
  id: number;
  user_id: number;
  branch_id: string;
  created_at: string;
};
