import Image from "next/image";
import styles from "./page.module.css";
import getForcast from "../../components/getForecast";

export default function Home() {
  const data = getForcast(46407);

  return <></>;
}
