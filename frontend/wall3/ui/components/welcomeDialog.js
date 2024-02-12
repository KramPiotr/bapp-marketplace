"use client";

import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "./dialog";
import Button from "./button";

function WelcomeDialog({ open, setOpen }) {
  return (
    <Dialog
      open={open}
      onClose={setOpen}
      className="border border-zinc-800 bg-zinc-900"
    >
      <DialogTitle className="flex items-center justify-between text-gray-200">
        <div className="text-gray-200">Welcome to Wall3!</div>
        <Button plain onClick={() => setOpen(false)}>
          <svg
            className="h-6 w-6 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <title>Close</title>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </DialogTitle>
      <DialogBody>
        <DialogDescription className="text-gray-300">
          <p>
            Wall3, the home of web3. A decentralised wall of interactive
            web3 blocks that connect the web3 ecosystem and community. The wall
            features programmable blocks built, owned, and governed by the
            community.
          </p>
          <p className="mt-3">
            Each block can be edited to become an abstract, launch pad,
            or entire sector of web3. Each block can be filled with prebuilt or
            community-based apps including static text, images, or custom
            interactive apps with different hosting and connection abilities.
          </p>
          <p className="mt-3">
            The unique combination of blocks is an ever-evolving display of web3
            with its own underlying economy. Wall3 features a block app
            marketplace, decentralised advertising network and the forefront of
            web3 technology.
          </p>
        </DialogDescription>
        <div className="flex">
          <div className="z-[10] mt-8 flex w-full justify-center">
            <Button fancy onClick={() => setOpen(false)} className="w-full">
              Start exploring
            </Button>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default WelcomeDialog;
