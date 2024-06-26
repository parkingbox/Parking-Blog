import Utterences from "@/src/components/Utterences";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
  description: "주니어 프론트엔드 개발자 박승우 소개",
};

function About() {
  return (
    <div className="mx-auto lg:ml-40">
      <>
        <h1 className="mb-6 text-3xl font-bold">About Me</h1>
        <section className="mb-12">
          <h3 className=" font-bold">
            안녕하세요 <br />
            저는 박승우입니다.
          </h3>

          <div className="my-6">
            <p className="my-2">새로운 기술을 공부하는 것을 좋아합니다.</p>
            <p className="my-2">
              항상 배울 자세를 가지고 모르는 것은 물어보고 새로운 기술들은
              공부하며 성장합니다.
            </p>
            <p className="my-2">
              코드 유지보수와 재사용성에 대해 끊임없이 고민합니다.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h4 className="mb-6 text-2xl font-semibold">Work Experience</h4>
          <ul className="flex list-disc flex-col gap-5 px-4">
            <li>
              <div>
                <p>(주)에이아이노미스 (2023.08 ~ 2023.12)</p>
                <p> - Nomis QR 홈페이지 프론트엔드 개발</p>
              </div>
            </li>
            <li>
              <div>
                <p>(주)퓨쳐시스템 (2023.12 ~ )</p>
                <p> 네트워크 장비 관리자 페이지 프론트엔드 개발</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h4 className="mb-6 text-2xl font-semibold">Education</h4>
          <ul className="flex list-disc flex-col gap-1 px-4">
            <li>항해99 13기 프론트엔드 과정(2023.02 - 2023.06)</li>
          </ul>
        </section>
        <section className="mb-12">
          <h4 className="mb-6 text-2xl font-semibold">Other Experience</h4>
          <ul className="flex list-disc flex-col gap-1 px-4">
            <li>
              <div>
                <p>공군 부사관 (2016.09 - 2021.9)</p>
              </div>
            </li>
          </ul>
        </section>
      </>
      <Utterences />
    </div>
  );
}

export default About;
