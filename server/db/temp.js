let dummy = {
  user: {
    id: 1234,
    username: Lenny Kim,
  },
  all: {
    ongoing: [{
        id: 0004,
        title: "드로잉 1작품 그리기",
        description: "매일 드로잉 1작품 그리기",
        onDay: 4,
      },
      {
        id: 0006,
        title: "아이콘 만들기",
        description: "클래식 다이어리를 테마로 매일 아이콘 1개씩 그리기",
        onDay: 1,
      },
      {
        id: 0007,
        title: "스타트업 아이디어 생각하기",
        description: "매일 스타트업 아이디어 1개씩 생각하고 블로그로 공유하기",
        onDay: 2,
      },
    ],
    waiting: [
      {
        id: 0008,
        title: "toy problem 풀기",
        description: "매일 toy problem 1문제씩 풀기",
      }
    ],
    complete: [
      {
        id: 0001,
        title: "아로마 종류별로 익히기",
        description: "매일 아로마 종류별로 시향하기",
      },
      {
        id: 0003,
        title: "칭찬하기",
        description: "매일 주변 사람을 관찰하고 칭찬할 점 1가지 찾아서 말해주기",
      }
    ],
  },
  recommended: {[{
      id: 0001,
      title: "드로잉 1작품 그리기",
      description: "매일 드로잉 1작품 그리기",
      wish: 1,
    },
    {
      id: 0003,
      title: "칭찬하기",
      description: "매일 주변 사람을 관찰하고 칭찬할 점 1가지 찾아서 말해주기",
    },
  ]},
  project: {
    id: 0004,
    title: "드로잉 1작품 그리기",
    description: "매일 드로잉 1작품 그리기",
    onDay: 2,
    doneToday: true,
    posts: [{
      id: 000001,
      day: 1,
      text: "매일 지나가는 골목에 사는 고양이들. 아침마다 나란히 서서 배웅해 준다.",
    },{
      id: 000002,
      day: 2,
      text: "매일 지나가는 골목에 사는 고양이들. 아침마다 나란히 서서 배웅해 준다.2222",
    }],
  },
}

export default dummy;
