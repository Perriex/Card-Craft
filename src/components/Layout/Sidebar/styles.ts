import { CSSProperties } from "react";

export const SidebarStyles = {
  container: {
    position: "absolute",
    left: " 0",
    top: "0",
    bottom: "0",
    width: "70px",
    background: "linear-gradient(6.93deg, #22C5CC 75.63%, #3ACCD2 88%)",
    borderRadius: "12px 0px 0px 12px",

    padding: "100px 0",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "200px",
  } as CSSProperties,
};
