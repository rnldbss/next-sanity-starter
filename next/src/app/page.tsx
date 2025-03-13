import SanityImage from "@/components/utilities/SanityImage";
import { fetchTest } from "@/lib/sanityFetch";
export default async function Home() {
  const data = await fetchTest();
  console.log(data);
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <h1 className="text-4xl font-bold">{data?.title}</h1>
      <SanityImage
        className="w-40 aspect-square"
        image={data.image}
        alt={data.image}
        width={200}
        height={200}
        quality={100}
      />
    </div>
  );
}
