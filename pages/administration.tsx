import Layout from "@/components/layout";
import { Category } from "@/models/category";
import { Ring } from "@/models/ring";
import Technology from "@/models/technology";
import { deleteOne, getTechnologies } from "@/technology-service";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const technologies = await getTechnologies();
  technologies.sort((a, b) => a.category - b.category || a.ring - b.ring);
  technologies.forEach((t, i) => (t.order = i + 1));
  return {
    props: {
      technologies: JSON.parse(JSON.stringify(technologies)),
    },
  };
};

export default function Administration({
  technologies,
}: {
  technologies: Technology[];
}) {
  const router = useRouter();
  const deleteTechnology = async (id: string) => {
    fetch(`/api/technologies/${id}`, { method: "DELETE" }).then(() =>
      router.refresh()
    );
  };

  const deploy = async () => {
    fetch("/api/deploy", { method: "POST" });
    const dialog = document.getElementById('modal');
    dialog?.setAttribute("open", "true");
  }

  const close = () =>{
    const dialog = document.getElementById('modal');
    dialog?.removeAttribute("open");
  }

  return (
    <Layout home={false}>
      <h5>Administration</h5>
      <div style={{ display: "flex", alignItems: "end" }}>
        <div style={{ marginLeft: "auto" }}>
          <Link href="/technologies/add" role="button" style={{ marginBottom: "0px" }}>
            ADD
          </Link>
          <a href="#" role="button" style={{ marginBottom: "0px", marginLeft: "5px" }} onClick={deploy}>
            DEPLOY
          </a>
        </div>
      </div>
      <table role="grid">
        <thead>
          <tr>
            <th scope="col">
              <strong>Id</strong>
            </th>
            <th scope="col">
              <strong>Name</strong>
            </th>
            <th scope="col">
              <strong>Category</strong>
            </th>
            <th scope="col">
              <strong>Ring</strong>
            </th>
            <th scope="col">
              <strong>Published</strong>
            </th>
            <th scope="col">
              <strong></strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {technologies.map((technology) => (
            <tr key={technology.order}>
              <th scope="row">{technology.order}</th>
              <td>{technology.name}</td>
              <td>{Category[technology.category]}</td>
              <td>{Ring[technology.ring]}</td>
              <td>
                {technology.publish ? (
                  <FontAwesomeIcon icon={faCheck} width={"18px"} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} width={"18px"} />
                )}
              </td>
              <td style={{ textAlign: "right" }}>
                <Link
                  href={`technologies/publish/${technology.id}`}
                  role="button"
                  className="outline"
                >
                  {technology.publish ? "UNPUBLISH" : "PUBLISH"}
                </Link>
                <Link
                  href={`technologies/edit/${technology.id}`}
                  role="button"
                  className="outline"
                  style={{ marginLeft: "5px" }}
                >
                  EDIT
                </Link>
                <a
                  href="#"
                  role="button"
                  className="outline"
                  style={{
                    color: "#c62828",
                    borderColor: "#c62828",
                    marginLeft: "5px",
                  }}
                  onClick={() => deleteTechnology(technology.id ?? "")}
                >
                  DELETE
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog id="modal">
  <article>
    <a href="#close"
      aria-label="Close"
      className="close"
      data-target="modal"
      onClick={close}>
    </a>
    <h3>Deploying in progress...</h3>
    <p>
      Changes will be visible after around 1 minute.
    </p>
    <footer>
      <a href="#confirm"
        role="button"
        data-target="modal"
        onClick={close}>
        Confirm
      </a>
    </footer>
  </article>
</dialog>
    </Layout>
  );
}
