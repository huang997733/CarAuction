"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

type Porps = {
  id: string;
};

export default function EditButton({ id }: Porps) {
  return (
    <Button outline>
      <Link href={`/auctions/update/${id}`}>Update Auction</Link>
    </Button>
  );
}
