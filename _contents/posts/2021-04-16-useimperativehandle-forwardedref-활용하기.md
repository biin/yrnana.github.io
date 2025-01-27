---
title: 'useImperativeHandle & forwardedRef 활용하기'
date: '2021-04-16T21:49:11+09:00'
published: true
---

```tsx
// Child.tsx

import React, { forwardedRef, useImperativeHandle, useRef } from 'react';

interface ChildProps {}
type InputRef = { focus: () => void } | null;
const Child = forwardedRef<InputRef, ChildProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));
  return <input ref={inputRef} />;
});
```

```tsx
// Parent.tsx

const Parent = () => {
  const ref = useRef<InputRef>(null);

  return (
    <div>
      <Child ref={ref} />
      <button onClick={() => ref.current?.focus()}>focus</button>
    </div>
  );
};
```

`useImperativeHandle`와 `forwardedRef`를 활용하면 부모 컴포넌트가 자식 컴포넌트의 함수를 호출하거나 값을 가져올 수 있다.
