import Publish from "@/components/publish";
import { getOne } from "@/technology-service";
import { GetServerSideProps } from "next";

export default Publish;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const technology = await getOne(`${id}`);
  
    return {
      props: {
        technology: JSON.parse(JSON.stringify(technology)),
      },
    };
  };