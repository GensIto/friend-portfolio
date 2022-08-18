import { Layout } from "../components/templates/Layout";
import { Section } from "../components/tools/Section";
import { Container } from "../components/tools/Container";
import MySwiper from "../components/parts/Swiper/Swiper";

export default function Home() {
  return (
    <Layout title='Home'>
      <Section top='sm' bottom='sm'>
        <Container size='full'>
          <MySwiper />
        </Container>
      </Section>
    </Layout>
  );
}
