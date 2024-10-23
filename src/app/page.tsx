import Image from "next/image";
import styles from "./page.module.css";
import getForcast from "../../components/getForecast";
import CityForm from "../../components/page_components/city_form";

export default async function Home() {
  const data = await getForcast(46407, 3);

  return (
    <>
      <CityForm />
    </>
  );
}
