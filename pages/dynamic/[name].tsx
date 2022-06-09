import React from "react";
import { useRouter } from "next/router";
export default function Name() {
  const router = useRouter();
  return (
    <>
      <div>Hello dynamic route {router.query.name}</div>
    </>
  );
}
