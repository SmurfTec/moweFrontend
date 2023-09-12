import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/event/design/start"}>
        <Button type="primary">Create Event</Button>
      </Link>
    </div>
  );
}
