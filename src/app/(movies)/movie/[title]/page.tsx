import { Title } from "@/components";

interface Props {
  params: {
    title: string;
  };
}

export default function MoviePage({ params }: Props) {
  const { title } = params;
  return (
    <>
      <Title title={title} className="mb-2 ps-8" />
    </>
  );
}
