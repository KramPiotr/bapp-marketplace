import NextLink from "next/link";

import { DataInteractive as HeadlessDataInteractive } from "@headlessui/react";
import React from "react";

export const Link = React.forwardRef(function Link(
  props,
  ref,
) {
  return (
    <HeadlessDataInteractive>
      <NextLink {...props} ref={ref} />
    </HeadlessDataInteractive>
  );
});
