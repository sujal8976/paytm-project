"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import db from "@repo/db/client";

export async function createOnRampTransaction(
  provider: string,
  amount: number
) {
  // Ideally the token should come from the banking provider (hdfc/axis)

  const session = await getServerSession(authOptions);

  if (!session?.user || !session.user?.id) {
    return {
      message: "Unauthenticated requestt",
    };
  }

  const token = (Math.random() * 1000).toString();

  await db.onRampTransaction.create({
    data: {
      provider,
      status: "Processing",
      startTime: new Date(),
      amount: amount * 100,
      userId: Number(session?.user?.id),
      token,
    },
  });

  return {
    message: "Done",
  };
}
