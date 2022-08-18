import Image from "next/image";
import { Layout } from "../components/templates/Layout";
import { Section } from "../components/tools/Section";
import { Container } from "../components/tools/Container";

export default function Skills() {
  return (
    <Layout title='skills'>
      <Section top='sm' bottom='sm'>
        <Container size=''>
          <ul className='flex justify-between flex-wrap w-9/12 mx-auto my-6'>
            <li className='w-24'>
              <Image
                src='/images/skills/ae.png'
                height='1024'
                width='1024'
                alt='after effect'
              />
            </li>
            <li className='w-24'>
              <Image
                src='/images/skills/ai.png'
                height='1024'
                width='1024'
                alt='illustrator'
              />
            </li>
            <li className='w-24'>
              <Image
                src='/images/skills/pr.png'
                height='1024'
                width='1024'
                alt='premier pro'
              />
            </li>
            <li className='w-24'>
              <Image
                src='/images/skills/ps.png'
                height='1024'
                width='1024'
                alt='photoshop'
              />
            </li>
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}
