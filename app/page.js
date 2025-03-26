import { UserButton } from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (<div><h1>Halloword</h1>
  <Button variant={'destructive'}>Subscribe</Button>
  <UserButton/>
  </div>);

  
}
