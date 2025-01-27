---
title: 'imported constant를 mock 하는 법'
date: '2021-02-08T01:43:13+09:00'
tags: [Jest, test]
published: true
---

함수를 mock 하는 법은 많은데 의외로 import 된 상수를 mock 하는 방법을 찾기 어려웠다.
~~(아니면 그냥 내가 검색을 못하는 걸 수도...)~~

예를 들면 아래와 같은 코드에서 `modeToText` 함수를 테스트 하는 경우 `isProduction`를 mock 해야 한다.

```js
// constants.ts
export const isProduction = true

// utils.ts
import { isProduction } from './constants'

export const modeToText = () => isProduction ? '운영' : '개발'
```

이 경우 `jest.requireMock`을 사용해서 테스트에 성공하였다. (테스트를 테스트하는 느낌^^!)

```js
// utils.test.ts
import { modeToText } from './utils';
const mockConstants = jest.requireMock('./constants');
jest.mock('./constants');
afterAll(() => {
  jest.resetModules();
});
describe('modeToText', () => {
  it('isProduction이 true일때 운영을 반환한다.', () => {
    mockConstants.isProduction = true;
    expect(modeToText()).toBe('운영');
  });
  it('isProduction이 false일때 개발을 반환한다.', () => {
    mockConstants.isProduction = false;
    expect(modeToText()).toBe('개발');
  });
});
```

아래와 같은 방법은 `isProduction`이 read-only property이기 때문에 ts오류가 발생한다.

```js
import * as constants from './constants';
jest.mock('./constants');
...
co
constants.isProduction = true; !!error!!
```
