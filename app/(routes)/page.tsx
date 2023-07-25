import { Container } from "@/components/ui/container";
import { Billboard } from '@/components/billboard';
import getBillboards from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {

  const billboard = await getBillboards("52499a50-1dfb-4b86-9dd9-5f0834211955")

  return (
    <Container>
      <div className="pace-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage;