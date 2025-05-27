import { Scene, Slider } from "@/components/pages";
import { Button, Input } from "@/components/ui";
import React from "react";

const page = () => {
  return (
    <div className="signin">
      <Scene />
      <div className="signin__box">
        <div className="signin__box__similar signin__box__slide">
          <Slider />
        </div>

        <div className="signin__box__similar signin__box__info">
          <div className="signin__box__info__guide">
            <p className="font-bold text-3xl lg:text-2xl text-center">
              Sign in / Register
            </p>
            <p className="text-center text-zinc-600">
              Manage your bookings with ease and enjoy members-only benefits
            </p>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email">Email Address</label>
              <Input id="email" placeholder={"Enter your email address"} />
            </div>

            <Button full secondary>
              continue
            </Button>
            <p className="text-center">
              By signing in or registering, I confirm that I have read and
              agreed to Flynow&apos;s{" "}
              <span className="text-[var(--primary)]">
                Terms and Conditions
              </span>{" "}
              and <span className="text-[var(--primary)]">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
