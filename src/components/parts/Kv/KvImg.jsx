import styled from 'styled-components';
export const KvImg = () => {
  return (
    <div className="w-full relative">
      <Kv src="https://source.unsplash.com/random/" alt="TEST" />
      <KvTitle>THIS IS TITLE</KvTitle>
    </div>
  );
};

const Kv = styled.img`
  width: 100%;
  height: 100vh;
  max-height: 800px;
  object-fit: cover; /* 縦横の比率を維持 */
  /* object-position: left top; 表示位置の指定も可*/
`;

const KvTitle = styled.h1`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #333;
`;
