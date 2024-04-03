import Container from "./components/_Container";

const Page = ({ params }: any) => {
  const { id } = params;

  return (
    <>
      <Container id={id} />
    </>
  );
};

export default Page;
