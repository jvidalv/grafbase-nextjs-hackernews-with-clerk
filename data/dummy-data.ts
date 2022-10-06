export const users = [
  {
    id: "01G9HEFXYV544RHWENWFMS8FP1",
    name: "Josep",
    email: "josep@grafbase.com",
    imageUrl: "https://i.pravatar.cc/150?u=j",
    createdAt: 1665061520606,
  },
  {
    id: "01G9HEFXYV544RHWENWFMS8FP2",
    name: "Vitaly",
    email: "vitaly@grafbase.com",
    imageUrl: "https://i.pravatar.cc/150?u=v",
    createdAt: 1663051520606,
  },
];

export const items = [
  {
    id: "01G9HEFXYV544RHWENWFMS8FPM",
    title: "Check this new data platform I just found",
    url: "https://grafbase.com",
    votes: ["", "", "", "", "", ""],
    createdAt: 1665061520606,
    comments: [
      {
        author: users[0],
        content: "Booo, this is so boring!",
        votes: ["", ""],
        createdAt: 1663051520606,
      },
      {
        author: users[1],
        content: "You have no idea bro!",
        votes: [""],
        createdAt: 1664051520606,
      },
    ],
    author: users[1],
  },
  {
    id: "01G9HEFXYV544RHWENWFMS8FPX",
    title: "Fresh is the fresher js framework out there",
    url: "https://fresh.com",
    votes: ["", "", "", "", "", "", "", "", ""],
    comments: [
      {
        author: users[1],
        content: "Sick bro!",
        votes: [""],
        createdAt: 1664041520606,
      },
      {
        author: users[0],
        content: "Thanks bro!",
        votes: [""],
        createdAt: 1664031520606,
      },
    ],
    createdAt: 1665061420606,
    author: users[0],
  },
  {
    id: "01G9HEFXYV244RHWENWFMS8FPX",
    title:
      "This video is so funny, I remember watching it back in 2006 when I was 12",
    url: "https://www.youtube.com/watch?v=rUDEX3MkRXY",
    votes: [],
    comments: [
      {
        author: users[1],
        content: "Sick bro!",
        votes: [""],
        createdAt: 1664021520606,
      },
      {
        author: users[0],
        content: "Thanks bro!",
        votes: [""],
        createdAt: 1664011520606,
      },
    ],
    createdAt: 1665051420606,
    author: users[0],
  },
  {
    id: "01G9HEFXYV544RHWECWFMS8FPM",
    title: "Istancool",
    url: "https://istancool.com",
    votes: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    createdAt: 1664061520606,
    comments: [
      {
        author: users[0],
        content: "I like Istancool!",
        votes: ["", ""],
        createdAt: 1663061520606,
      },
      {
        author: users[1],
        content: "I do like more Tentacool tho!",
        votes: [""],
        createdAt: 1662061520606,
      },
      {
        author: users[0],
        content: "Is this about pokemons or cities?",
        votes: ["", "", "", "", ""],
        createdAt: 1661061520606,
      },
      {
        author: users[1],
        content: "Not sure anymore...",
        votes: ["", "", "", "", ""],
        createdAt: 1661061520606,
      },
    ],
    author: users[1],
  },
];
