---
title: "SEO에 대해 알아보자 (1)"
date: "2023-10-24"
description: Next에서 SEO 적용해보기
---

![alt](https://www.oberlo.com/media/1603954182-seo-article-header.png?fit=max&fm=webp&w=1824)

## SEO 적용기

블로그를 만들고 나서 사람들이 검색을 하면 그래도 첫페이지에는 떠야하지 않을까? 라는 생각을 했습니다.<br/>
그래서 오늘 SEO에 대해 공부하고 적용해보려고 합니다.

## SEO란?

먼저 SEO를 적용하기 전에 SEO가 무엇인지에 대해 공부해보려고 합니다.

**검색엔진 최적화**(SEO)란 검색엔진이 이해하기 쉽도록 홈페이지의 구조와 페이지를 개발해 검색 결과 상위에 노출될 수 있도록 하는 작업을 말합니다.

## SEO가 중요한 이유

SEO는 사용자가 원하는 순간에 사용자의 질문에 적합한 콘텐츠를 제공해 주는 작업이라고 할 수 있습니다.<br/>
대부분의 사용자는 광고노출에 의한 클릭 보단 **자연 검색**을 통한 클릭을 더 많이 한다고 하는데 이 때<br/> 사용자가 원하는 정보 또는 브랜드의 제품 등을 상단에 노출 시킨다면 사용자의 사이트 재방문 또는 제품의 구매에 상당한 영향을 끼칠 수 있습니다.

## SEO의 과정

1. 디스커버리 : 새롭게 만들어진 웹페이지를 검색엔진이 발견합니다.
2. 크롤링: 웹 크롤러가 웹페이지의 콘텐츠를 복사하여 검색엔진으로 가져옵니다.
3. 인덱싱: 가져온 콘텐츠를 주제별로 색인하여 보관합니다.
4. 랭킹: 검색 의도에 맞춰 색인된 콘텐츠에 순위를 부여한 후 결과로 제공합니다.

## 구글 검색엔진최적화(SEO)로 상위노출 하는 방법

### 타이틀 태그와 메타 태그 활용하기

Next를 사용하면,
정적 메타데이터 ,동적 메타데이터 두가지 방법으로 메타데이터를 생성할 수<br/> 있습니다.

검색엔진최적화를 위해서는 기본적으로 웹사이트를 HTML 문법에 맞게 작성해야 합니다.<br/> 타이틀 태그는 페이지의 제목을 의미합니다.

1. 정적 메타 데이터

- 정적으로 메타데이터를 생성하는 방법으로, 페이지 내부에서 metadata를 export 하여 메타데이터 객체를 생성합니다. <br/>이때 template 속성을 이용하면 방문하는 페이지 별로 타이틀이 바뀌게 됩니다.

```javascript
layout.tsx;

export const metadata = {
  title: {
    default: "Parkseungwoo blog",
    template: "parkseungwoo blog | %s",
  },
  description: "FrontEnd Developer Parkseungwoo nextjs blog",
  icons: {
    icon: "/favicon.ico",
  },
};
```

2. 동적 메타 데이터

- 메타데이터를 generateMetadata 함수를 사용하여 fetch하여 동적으로 생성합니다.
- generateStaticParams 함수를 사용해 개별적으로 생성한 뒤 <br/>find 메서드를 사용해 slug와 맞는 포스트를 찾습니다. 찾아진 포스트에서 데이터를 추출하여 메타데이터에 맞는 형식으로 반환해 줍니다.

```javascript
[slug] / page.tsx;

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string },
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.url === params.slug);
  if (!post) {
    return;
  }
  const { title, date: publishedTime, description, url } = post;

  return {
    title,
    description,
    openGraph: {
      title: { absolute: title },
      description,
      type: "article",
      publishedTime,
      url: `https://parking-blog-three.vercel.app/post/${url}`,
    },
  };
}
```

<br/>
위와 같은 과정을 거치게 되면 아래와 같이 Next가 메타데이터를 생성해 줍니다. 타이틀도 들어가 있는 것을 확인해 볼 수 있네요.

## 2탄

2탄은 사이트맵과 robots.txt를 적용해보고 lighthouse 점수를 측정 해보려고 합니다.

## 마무리

개발 공부를 시작하면서 구글링을 정말 많이 한 것 같은데 처음엔 최상단에 노출이 되는 것들이 왜 그럴까? 라는 생각을 해보진 않았던 것 같습니다.<br/>
좋은 컨텐츠와 서비스를 만들더라도 사용자에게 노출이 되지 않는다면 아무도 모르는 컨텐츠가 될 것이라는 사실에 SEO가 정말 중요한 작업이라는 것을 다시 한번 깨닫게 되었습니다.

<hr/>

### 출처

- <https://academy.dream-coding.com/courses> (드림코딩 next 강의)
- <https://seo.tbwakorea.com/blog/seo-guide-2022/#part5>
- <https://www.ascentkorea.com/seo-complete-guide-2022>
- <https://nextjs.org/learn/seo/introduction-to-seo>
