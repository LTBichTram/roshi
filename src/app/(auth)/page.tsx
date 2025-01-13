import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  return (
    <Link href={"/login"}>
      <Button variant="outline">Đi tới login</Button>
    </Link>
  );
}
