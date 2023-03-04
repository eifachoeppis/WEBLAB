import { Category } from "@/models/category";
import { Ring } from "@/models/ring";
import Technology from "@/models/technology";
import { ChangeEvent } from "react";
import Layout from "./layout";
import { useForm, SubmitHandler } from "react-hook-form";
import { postOne, updateOne } from "@/technology-service";
import { useRouter } from "next/router";
import styles from "./addEdit.module.css"

interface AddEditProps {
  technology?: Technology;
}

export default function AddEdit({ technology }: AddEditProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<Technology>({
    defaultValues: technology,
  });
  const onSubmit: SubmitHandler<Technology> = (data) => {
    if (edit) {
      fetch(`/api/technologies/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => router.push("/administration"));
    } else {
      fetch(`/api/technologies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => router.push("/administration"));
    }
  };

  let edit = false;
  if (technology) {
    edit = true;
  }

  return (
    <Layout home={false}>
      <h3>{edit ? "Edit technology" : "Add technology"}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          {...register("name", { required: true })}
          aria-invalid={errors?.name?.type === "required" ? true : undefined}
        ></input>
        {errors?.name?.type === "required" && <p className={styles.errorText}>This field is required</p>}
        <label>Description</label>
        <input {...register("description", { required: true })} aria-invalid={errors?.name?.type === "required" ? true : undefined}>
        </input>
        {errors?.description?.type === "required" && <p className={styles.errorText}>This field is required</p>}
        <label>Category</label>
        <select {...register("category", { valueAsNumber: true, required: true })}>
          <option value={Category["Languages & Frameworks"]}>
            {Category[Category["Languages & Frameworks"]]}
          </option>
          <option value={Category.Tools}>
            {Category[Category.Tools]}
          </option>
          <option value={Category.Platforms}>
            {Category[Category.Platforms]}
          </option>
          <option value={Category.Techniques}>
            {Category[Category.Techniques]}
          </option>
        </select>
        {!edit && (
          <>
          <label>Ring</label>
          <select {...register("ring", { valueAsNumber: true })}>
            <option value={Ring.Adopt}>{Ring[Ring.Adopt]}</option>
            <option value={Ring.Trial}>{Ring[Ring.Trial]}</option>
            <option value={Ring.Assess}>{Ring[Ring.Assess]}</option>
            <option value={Ring.Hold}>{Ring[Ring.Hold]}</option>
          </select>
          <label>Ring description</label>
          <input {...register("ringDescription")}></input>
          </>)}
        <input type="submit" disabled={!isDirty}></input>
      </form>
      <a href="#" onClick={() => router.back()}>← Back to administration</a>
    </Layout>
  );
}
