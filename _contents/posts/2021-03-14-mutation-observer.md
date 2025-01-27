---
title: 'Mutation Observer'
date: '2021-03-14T01:15:29+09:00'
tags: [Mutation Observer, Web API]
published: true
---

`MutationObserver`는 DOM 변경 감시를 제공한다. DOM을 감시하다가 child 노드들이나 attributes, data 등이 변경되면 콜백을 실행한다.
예를 들면 `prefers-color-scheme` 미디어쿼리가 [안 먹는 브라우저](https://caniuse.com/?search=prefers-color-scheme) 에서 다크모드를 적용하려면 보통 `<body>`의 `class`에 darkmode 같은 `className`을 추가하는 방식을 쓰곤 하는데, 만일 특정 컴포넌트에서 이 `className` 변경을 감지하고 javascript 함수를 실행하길 원한다면 이 API를 사용하면 된다.

## MutationObserver 생성 및 적용

```js
const darkmodeClassName = 'is-darkmode';
const observerCallback = () => {
  const isDarkmode = document.body.classList.contains(darkmodeClassName);
  // ...
};
const targetElement = document.body;
const observeOptions = { attributes: true, attributeFilter: ['class'] };
const observer = new MutationObserver(observerCallback);
observer.observe(targetElement, observeOptions);
```

`MutationObserver` 인스턴스는 타겟 등록과 동시에 callback을 실행하지 않으므로, 만약 초기 실행을 원한다면 추가로 실행하는 과정이 필요하다.

## 호환성

![](../assets/image-3.png)
호환이 많이 되는 편이여서 ie구버전을 지원해야 하는 경우가 아니라면 polyfill 적용은 필요없을 것 같다.

## 참고

- https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
