import { CSSProperties } from "react";

export default function Ring() {
  return (
    <div
      className="absolute w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] xl:w-[500px] xl:h-[500px] rounded-full self-center justify-self-center animate-slow-spin opacity-50"
      style={
        {
          "--blur": "5px",
          boxShadow:
            "var(--ring-offset-x) 0px var(--ring-blur) calc(var(--ring-blur) / 4), calc(var(--ring-offset-x) * -1) 0px var(--ring-blur) calc(var(--ring-blur) / 4)",
        } as CSSProperties
      }
    ></div>
  );
}
