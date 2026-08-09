import { mkdir, writeFile } from "node:fs/promises";
import QRCode from "qrcode";

const target = "https://t.me/norbapp";
const output = new URL("../public/telegram-qr.svg", import.meta.url);

await mkdir(new URL("../public/", import.meta.url), { recursive: true });

const svg = await QRCode.toString(target, {
  type: "svg",
  errorCorrectionLevel: "M",
  margin: 4,
  width: 320,
  color: {
    dark: "#12232D",
    light: "#FFFFFF",
  },
});

await writeFile(output, svg, "utf8");
