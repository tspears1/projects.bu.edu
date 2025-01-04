"use client";

import { forwardRef } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import cn from "classnames";

const Separator = forwardRef(({
  text = "",
  orientation = "horizontal",
  decorative = true,
  ...props
}, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "separator",
      {
        "separator--vertical": orientation === "vertical" ||
          orientation !== "horizontal",
      },
      { "separator--horizontal": orientation === "horizontal" },
    )}
    {...props}
  >
    {text ? <div className={styles.SeperatorText}>{text}</div> : null}
  </SeparatorPrimitive.Root>
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
