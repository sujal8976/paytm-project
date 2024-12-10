"use client";
import { Button } from "@repo/ui/components/Button";
import { Card } from "@repo/ui/components/card";
import { Center } from "@repo/ui/components/Center";
import { TextInput } from "@repo/ui/components/TextInput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendMoneyCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="h-[90vh]">
      <Center>
        <Card title="Send">
          <div className="min-w-72 pt-2">
            <TextInput
              placeholder={"Number"}
              label="Number"
              onChange={(value) => {
                setNumber(value);
              }}
            />
            <TextInput
              placeholder={"Amount"}
              label="Amount"
              onChange={(value) => {
                setAmount(value);
              }}
            />
            <div className="pt-4 flex justify-center">
              <Button onClick={async () => {
                await p2pTransfer(number, Number(amount) * 100)
              }}>Send</Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  );
}
