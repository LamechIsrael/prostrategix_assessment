import { FormEvent, FormEventHandler } from "react";

interface SubmitFormProps {
  submitFormHandler: FormEventHandler;
}

export default function CityForm({ submitFormHandler }: SubmitFormProps) {
  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <h1>Anytime Weather</h1>
        <h2>Enter Zipcode Below</h2>
        <h4>
          (A zipcode is more accurate, because some cities in different states
          share the same name. Like Sacramento.)
        </h4>
        <input type="text" name="zipcode" />
        <input type="radio" name="temp" id="tempf" value={"F"} />
        <label htmlFor="tempf">F</label>
        <input type="radio" name="temp" id="tempc" value={"C"} />
        <label htmlFor="tempc">C</label>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
