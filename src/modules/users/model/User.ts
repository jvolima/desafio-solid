import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  constructor() {
    this.id = uuidV4();
  }
  id: string;
  name: string;
  admin = false;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export { User };
