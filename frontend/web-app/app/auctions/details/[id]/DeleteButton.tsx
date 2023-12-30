"use client";

import { deleteAuction } from "@/app/actions/auctionActions";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  id: string;
};

export default function DeleteButton({ id }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function doDelete() {
    setIsLoading(true);
    deleteAuction(id)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.status + " " + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Button color="failure" outline isProcessing={isLoading} onClick={doDelete}>
      Delete Auction
    </Button>
  );
}
