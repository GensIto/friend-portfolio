import { WorksLayout } from "../components/templates/WorksLayout";
import { Section } from "../components/tools/Section";
import { Container } from "../components/tools/Container";
import { client } from "../lib/client";
import styled from "styled-components";

export default function Works({ work }) {
  return (
    <WorksLayout title='works'>
      <Section top='sm' bottom='sm'>
        <Container size=''>
          <ul className='flex items-center justify-center flex-col gap-8'>
            {work.map((work) => {
              return (
                <li key={work.id}>
                  {work.img.url ? <img src={work.img.url} /> : ""}
                  {work.iframe ? (
                    <YoutubeBox
                      dangerouslySetInnerHTML={{
                        __html: `${work.iframe}`,
                      }}
                    />
                  ) : (
                    ""
                  )}
                  <h1 className='text-gray text-md md:text-lg'>{work.title}</h1>
                  <p className='text-gray text-md md:text-lg'>
                    担当業務:{work.job}
                  </p>
                  {work.url ? (
                    <a href={work.url}>
                      <p className='text-gray text-sm md:text-md'>みる</p>
                    </a>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </WorksLayout>
  );
}

const YoutubeBox = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "works",
  });

  return {
    props: {
      work: data.contents,
    },
    revalidate: 10,
  };
};
