"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      const data = await fetch("http://localhost:5189/api/user", {
        credentials: "include",
      });
      const res = await data.json();

      if (res.status !== 401) {
        setIsLoading(false);
      } else {
        router.push("/");
      }
    };

    getUser();
  }, []);

  return (
    <>
      {!isLoading && (
        <div>
          <h1>Dashboard</h1>
        </div>
      )}
    </>
  );
};
