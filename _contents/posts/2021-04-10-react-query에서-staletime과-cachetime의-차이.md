---
title: 'React Query에서 staleTime과 cacheTime의 차이'
date: '2021-04-10T12:33:59+09:00'
tags: [React Query]
published: true
---

## React Query의 라이프 사이클

- A 쿼리 인스턴스가 mount 됨
- 네트워크에서 데이터 fetch 하고 A라는 query key로 캐싱함
- 이 데이터는 `fresh` 상태에서 `staleTime`(기본값 0) 이후 `stale` 상태로 변경됨
- A 쿼리 인스턴스가 unmount 됨
- 캐시는 `cacheTime`(기본값 5min) 만큼 유지되다가 가비지 콜렉터로 수집됨
- 만일 `cacheTime`이 지나기 전에 A 쿼리 인스턴스가 새롭게 mount되면, fetch가 실행되고 `fresh`한 값을 가져오는 동안 캐시 데이터를 보여줌

## staleTime

- 데이터가 `fresh` -> `stale` 상태로 변경되는데 걸리는 시간
- `fresh` 상태일때는 쿼리 인스턴스가 새롭게 mount 되어도 네트워크 fetch가 일어나지 않는다.
- 데이터가 한번 fetch 되고 나서 `staleTime`이 지나지 않았다면 unmount 후 mount 되어도 fetch가 일어나지 않는다.

## cacheTime

- 데이터가 `inactive` 상태일 때 캐싱된 상태로 남아있는 시간
- 쿼리 인스턴스가 unmount 되면 데이터는 `inactive` 상태로 변경되며, 캐시는 `cacheTime`만큼 유지된다.
- `cacheTime`이 지나면 가비지 콜렉터로 수집된다.
- `cacheTime`이 지나기 전에 쿼리 인스턴스가 다시 마운트 되면, 데이터를 fetch하는 동안 캐시 데이터를 보여준다.
- `cacheTime`은 `staleTime`과 관계없이, 무조건 inactive 된 시점을 기준으로 캐시 데이터 삭제를 결정한다.

## 그 외

- isFetching : 데이터가 fetch될 때 `true`, 캐싱 데이터가 있어서 백그라운드에서 fetch되더라도 `true`
- isLoading : 캐싱된 데이터가 없을때 fetch 중에 `true`
