import Image from "next/image";
import styles from "./page.module.css";
import getForcast from "../../components/getForecast";

export default async function Home() {
  const data = await getForcast(46407, 3);

  console.log(data);

  return <></>;
}
