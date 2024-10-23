import Image from "next/image";
import styles from "./page.module.css";
import getForcast from "../../components/getForecast";
import CityForm from "../../components/page_components/city_form";
import { FormEventHandler } from "react";

export default async function Home() {
  const data = await getForcast(46407, 3);

  function submitForm(event: React.FormEvent) {}

  return (
    <>
      <CityForm submitFormHandler={submitForm} />
    </>
  );
}
