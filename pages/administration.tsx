import Layout from "@/components/layout";

export default function Administration() {

  var technologies = [
    {
      id: 1,
      quadrant: 3,
      ring: 3,
      label: "AWS Data Pipeline"
    },
    {
      id: 2,
      quadrant: 3,
      ring: 0,
      label: "AWS EMR"
    },
    {
      id: 3,
      quadrant: 3,
      ring: 2,
      label: "AWS Glue"
    },
    {
      id: 4,
      quadrant: 3,
      ring: 0,
      label: "Airflow"
    }
  ]

  return (
    <Layout home={false}>
      <h5>Administration</h5>
      <table role="grid">
        <thead>
          <tr>
            <th scope="col"><strong>Id</strong></th>
            <th scope="col"><strong>Name</strong></th>
            <th scope="col"><strong>Category</strong></th>
            <th scope="col"><strong>Ring</strong></th>
            <th scope="col"><strong>Actions</strong></th>
          </tr>
        </thead>
        <tbody>
          {technologies.map(technology => (
            <tr key={technology.id}>
              <th scope="row">{technology.id}</th>
              <td>{technology.label}</td>
              <td>{technology.quadrant}</td>
              <td>{technology.ring}</td>
              <td>EDIT / ADD</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
