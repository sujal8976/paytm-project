import { Button } from "@repo/ui/components/ui/button";
import { ToastDemo } from "../components/toastDemo";
import X from "@repo/ui/icons/X";
import Balance from "../components/balance";
import Page from "../components/Appbar"

export default function Home() {
  return (
    <div>
      <Page/>
      <div className="">Hey there</div>
      <Button className="" variant={"destructive"}>
        click
      </Button>
      <ToastDemo />
      <X/>
      <Balance/>
    </div>
  );
}
