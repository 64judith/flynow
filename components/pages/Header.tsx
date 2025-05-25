"use client";

import React, { useState } from "react";
import { Logo } from "../svg";
import { Button } from "../ui";
import { useIsMobile } from "@/hooks/customHooks";
import { Modal } from "./Modal";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const brandClick = () => {
    if (isMobile) {
      openModal();
    } else {
      router.push("/");
    }
  };
  return (
    <div className="header">
      <button className="flex flex-col gap-1 items-center" onClick={brandClick}>
        <Logo width="6em" />
        <span className="hamburger w-[60%] "></span>
        <span className="hamburger w-[40%]"></span>
        <span className="hamburger w-[20%]"></span>
      </button>

      <span className="deskMenu separator">- - - - - -</span>
      <span className="deskMenu">
        FlyNow <br /> Business Travel
      </span>
      <span className="deskMenu separator">- - - - - -</span>
      <span className="deskMenu">
        Manage My <br /> Bookings
      </span>
      <span className="deskMenu separator">- - - - - -</span>

      <span className="flex items-center justify-center">
        <Button primary>Login or Create Account</Button>
      </span>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal__content">
          <span className="mobileMenu">FlyNow Business Travel</span>
          <span className="flex w-full">
            - - - - - - - - - - - - - - - - - - - -
          </span>
          <span className="mobileMenu">Manage My Bookings</span>
        </div>
      </Modal>
    </div>
  );
};
