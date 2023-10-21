import Image from "next/image";
import Profile from "../../public/Profile.webp";

export default function Home() {
  return (
    <>
      <div className="flex mx-auto max-w-xl py-8">
        <Image
          src={Profile}
          quality={100}
          className="h-40 w-40 rounded-full object-cover"
          alt="Profile"
        />
        <div className="mx-auto max-w-xl py-8">
          <h1 className="mb-8 text-left text-2xl font-black">안녕하세요.</h1>
          <p className="mb-4 text-left font-black">
            프론트엔드 개발자 박승우입니다.
          </p>
        </div>
      </div>
      <div className="py-8">
        <p className="mb-4">
          저는 FrontEnd를 깊이 있게 다져가기 위해 양질의 글을 쓰고자 노력합니다.
        </p>
        <p className="mb-4">
          좋은 글, 다른사람에게 도움이 되고 영감을 주는 개발 글을 작성하여
          다양한 지식을 공유하는 것을
        </p>
        <p className="mb-4">목표하고 있습니다.</p>
      </div>
    </>
  );
}
