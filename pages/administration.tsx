import Layout from "@/components/layout";
import { Category } from "@/models/category";
import { Ring } from "@/models/ring";
import Technology from "@/models/technology";
import { deleteOne, getTechnologies } from "@/technology-service";
import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const technologies = await getTechnologies();
  technologies.sort((a, b) => a.category - b.category || a.ring - b.ring);
  technologies.forEach((t, i) => t.order = i + 1);
  return {
    props: {
      technologies: JSON.parse(JSON.stringify(technologies)),
    }
  }
}

export default function Administration({technologies}: { technologies: Technology[] }) {

  const router = useRouter();
  const deleteTechnology = async (id: string) => {
    fetch(`/api/technologies/${id}`, {method: "DELETE"}).then(() => router.refresh());
  }

  return (
    <Layout home={false}>
      <h5>Administration</h5>
      <div style={{display: "flex", alignItems: "end"}}>
        <div style={{marginLeft: "auto"}}>
          <button className="outline" style={{marginBottom: "0px"}}>ADD</button>
        </div>
      </div>
      <table role="grid">
        <thead>
          <tr>
            <th scope="col"><strong>Id</strong></th>
            <th scope="col"><strong>Name</strong></th>
            <th scope="col"><strong>Category</strong></th>
            <th scope="col"><strong>Ring</strong></th>
            <th scope="col"><strong></strong></th>
          </tr>
        </thead>
        <tbody>
          {technologies.map(technology => (
            <tr key={technology.order}>
              <th scope="row">{technology.order}</th>
              <td>{technology.name}</td>
              <td>{Category[technology.category]}</td>
              <td>{Ring[technology.ring]}</td>
              <td style={{textAlign: "right"}}><a href="#" role="button" className="outline">EDIT</a> <a href="#" role="button" className="outline" style={{color: "#c62828", borderColor: "#c62828", marginLeft: "5px"}} onClick={() => deleteTechnology(technology.id ?? "")}>DELETE</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
