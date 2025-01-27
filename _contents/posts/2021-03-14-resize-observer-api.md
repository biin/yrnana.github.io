---
title: 'Resize Observer API'
date: '2021-03-14T01:32:43+09:00'
tags: [Resize Observer API, Web API]
published: true
---

`Resize Observer API`는 요소의 크기 변화를 감지하고 콜백을 실행한다. 기존에는 Viewport 크기 변화는 `window`의 `resize` 이벤트 또는 `window.matchMedia`로 감지할 수 있지만 요소의 크기 변화를 직접적으로 감지할 수 있는 방법은 없었다. 이 API를 이용하면 브라우저 크기 변화에 의존하지 않고 요소의 크기 변화를 직접적으로 관찰하고 대응할 수 있다.

## Resize Observer 생성 및 적용

```js
const targetElement = document.querySelector('#target');
const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    // borderBoxSize, contentBoxSize
  });
});
observer.observe(targetElement);
```

[contentBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize)는 [borderBoxSize](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/borderBoxSize)에서 `padding`과 `border`를 뺀 값이다.

## 호환성

![](../assets/image-14.png)
아직 호환성이 많이 아쉬운 API다. 특히 `ios safari` 기준 `13.7`(2020년 이후 업데이트) 이상이어야 대응하므로 사용에 주의가 필요하다.

## 참고

- https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API
