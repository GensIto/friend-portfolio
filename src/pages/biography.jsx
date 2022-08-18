import Link from "next/link";
import Image from "next/image";
import { Layout } from "../components/templates/Layout";
import { Section } from "../components/tools/Section";
import { Container } from "../components/tools/Container";

export default function Biography() {
  return (
    <Layout title='biography'>
      <Section top='sm' bottom='sm'>
        <Container size=''>
          <div>
            <Image
              src='/images/biography/thum.jpg'
              width={1660}
              height={812}
              alt='松崎青(しげる)'
            />
            <h1 className='text-md md:text-3xl'>HARUKI MATSUZAKI</h1>
            <div className='flex items-center justify-start gap-6'>
              <p className='text-md md:text-3xl'>出身地 : 兵庫県 神戸市</p>
              <p className='text-md md:text-3xl'>生年月日 : 1999/03/12</p>
            </div>
            <p className='text-sm md:text-md'>
              映像クリエイターとしてWeb広告ムービー・SNS広告ムービー・インタビュームービー
              プロモーションムービー・Music
              Video・Youtube動画などの企画・撮影・デザイン・編集などを行っています。
              神戸のストリートカルチャーの中でミュージックビデオを軸にした自由度の高い映像制作に始まり
              京都のデザイン会社でのweb広告を軸にしたデザインとしての映像制作を経験。
              作品・商材問わず幅広い表現から案件ごとに最適な表現を導き出します。
            </p>
            <p className='text-sm md:text-md'>SNS</p>
            <Link href='https://www.instagram.com/siger.m/'>
              <a className='text-sm'>instagram | @siger.m</a>
            </Link>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
