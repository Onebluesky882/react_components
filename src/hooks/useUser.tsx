import { FormEvent, useState } from "react";
import { sleep } from "../utils/sleep";
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
};

const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState("");

  const loadUser = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await sleep(1000);
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const getUserbyId = await data.json();

    setUser(getUserbyId);
    setLoading(false);
    setUserId("");
  };
  return { loadUser, loading, user, setUserId, userId };
};
export default useUser;
