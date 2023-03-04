import { Category } from "@/models/category";
import { Ring } from "@/models/ring";
import Technology from "@/models/technology";
import { ChangeEvent } from "react";
import Layout from "./layout";
import { useForm, SubmitHandler } from "react-hook-form";
import { postOne, updateOne } from "@/technology-service";
import { useRouter } from "next/router";
import styles from "./publish.module.css";

interface PublishProps {
  technology?: Technology;
}

export default function Publish({ technology }: PublishProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Technology>({
    defaultValues: technology,
  });
  const onSubmit: SubmitHandler<Technology> = (data) => {
    fetch(`/api/technologies/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => router.push("/administration"));
  };

  return (
    <Layout home={false}>
      <h3>{"Publish technology"}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Ring</label>
        <select {...register("ring", { valueAsNumber: true, required: true })}>
          <option value={Ring.Adopt}>{Ring[Ring.Adopt]}</option>
          <option value={Ring.Trial}>{Ring[Ring.Trial]}</option>
          <option value={Ring.Assess}>{Ring[Ring.Assess]}</option>
          <option value={Ring.Hold}>{Ring[Ring.Hold]}</option>
        </select>
        <label>Ring description</label>
        <input {...register("ringDescription", { required: true })}></input>
        {errors?.ringDescription?.type === "required" && (
          <p className={styles.errorText}>This field is required</p>
        )}
        <label>Publish</label>
        <fieldset>
        <input type={"checkbox"} role={"switch"} {...register("publish")}></input>
        </fieldset>
        <input type="submit"></input>
      </form>
      <a href="#" onClick={() => router.back()}>
        ← Back to administration
      </a>
    </Layout>
  );
}
