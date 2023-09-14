import { Button } from "antd";
import Link from "next/link";
import Intro from "@/components/event/Intro";

const IntroSelection = () => {
  return (
    <section className="bg-white w-9/12 bg-opacity-50 backdrop-blur-md mx-auto px-20 py-10 rounded-lg">
      <p className="text-2xl mb-6">
        firstly, let’s make it epic! choose the intro for your invitation:{" "}
      </p>
      <div className="bg-white rounded-lg py-10 px-10">
        <Intro />
      </div>
      <div className="flex justify-end mt-10">
        <Link href={"/event/design/media"}>
          <Button type="primary" size="large" shape="round">
            Next Step
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default IntroSelection;
