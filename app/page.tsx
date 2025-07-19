import localFont from "next/font/local";

const evaFont = localFont({
    src: "../fonts/NIS-JTC-Win-M9.ttf",
    variable: "--font-geist-eva",
})
export default function Home() {
  return (
    <>
      my portfolio
    </>
  );
}
