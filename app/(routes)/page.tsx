import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import { Container } from "@/components/ui/container";
import { Billboard } from '@/components/billboard';
import { ProductList } from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {

  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboards("52499a50-1dfb-4b86-9dd9-5f0834211955")

  return (
    <Container>
      <div className="pace-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage;