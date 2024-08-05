const videos = [
  {
    id: 1,
    img: "https://img.youtube.com/vi/3nlwg6Bku7I/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/3nlwg6Bku7I",
    title: "สบาย สบาย - เบิร์ด ธงไชย (Bird Thongchai)",
  },
  {
    id: 2,
    img: "https://img.youtube.com/vi/oppMTue4gRE/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/oppMTue4gRE",
    title: "เต่างอย - จินตหรา พูนลาภ (Jintara Poonlarp)",
  },
  {
    id: 3,
    img: "https://img.youtube.com/vi/LeS1MFnIhx8/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/LeS1MFnIhx8",
    title: "Slow Motion - Joey Boy",
  },
  {
    id: 4,
    img: "https://img.youtube.com/vi/Xh89WD3CBEU/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/Xh89WD3CBEU",
    title: "I just wanna pen fan you dai bor? - สิงโต นำโชค",
  },
  {
    id: 6,
    img: "https://img.youtube.com/vi/cdk4hVPN_F0/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/cdk4hVPN_F0",
    title: "El Problema - MORGENSHTERN & Тимати",
  },
  {
    id: 7,
    img: "https://img.youtube.com/vi/qmzi1EvwWlA/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/qmzi1EvwWlA",
    title: "КЛИКБЭЙТ - CMH",
  },
  {
    id: 8,
    img: "https://img.youtube.com/vi/8TPN0x9NPuM/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/8TPN0x9NPuM",
    title: "ДИСКИ ВПИСКИ - CMH & RUSSIAN VILLAGE BOYS",
  },
  {
    id: 9,
    img: "https://img.youtube.com/vi/i63cgUeSsY0/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/i63cgUeSsY0",
    title: "BIG DICK - LITTLE BIG",
  },
  {
    id: 10,
    img: "https://img.youtube.com/vi/2uTMTyqQxl4/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/2uTMTyqQxl4",
    title: "GIVE ME YOUR MONEY - LITTLE BIG",
  },
  {
    id: 11,
    img: "https://img.youtube.com/vi/ADlGkXAz1D0/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/ADlGkXAz1D0",
    title: "GO BANANAS - LITTLE BIG",
  },
  {
    id: 12,
    img: "https://img.youtube.com/vi/UVrjzOUZJI4/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/UVrjzOUZJI4",
    title: "Life in da trash - LITTLE BIG",
  },
  {
    id: 13,
    img: "https://img.youtube.com/vi/nUwTnJ8yFXY/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/nUwTnJ8yFXY",
    title: "TACOS - LITTLE BIG",
  },
  {
    id: 14,
    img: "https://img.youtube.com/vi/1t_sMynan_k/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/1t_sMynan_k",
    title: "FARADENZA - LITTLE BIG",
  },
  {
    id: 15,
    img: "https://img.youtube.com/vi/mDFBTdToRmw/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/mDFBTdToRmw",
    title: "SKIBIDI - LITTLE BIG",
  },
  {
    id: 16,
    img: "https://img.youtube.com/vi/SsFI40bXROs/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/SsFI40bXROs",
    title: "I'M OK - LITTLE BIG",
  },
  {
    id: 17,
    img: "https://img.youtube.com/vi/aS_wdyhu0xQ/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/aS_wdyhu0xQ",
    title: "РАТАТАТАТА - MORGENSHTERN & Витя АК",
  },
  {
    id: 18,
    img: "https://img.youtube.com/vi/bps9OB0UO3U/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/bps9OB0UO3U",
    title: "HOLA HOLA ДЕНЬГИ НА ЗАПЯСТЬЕ - INSTASAMKA",
  },
  {
    id: 19,
    img: "https://img.youtube.com/vi/HyYTMyH72n4/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/HyYTMyH72n4",
    title: "Fremdgehen - K.I.Z.",
  },
  {
    id: 20,
    img: "https://img.youtube.com/vi/eTFeFJ2D1RY/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/eTFeFJ2D1RY",
    title: "Sterben kannst du überall - Trailerpark",
  },
  {
    id: 21,
    img: "https://img.youtube.com/vi/fpJ0VJGNXgY/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/fpJ0VJGNXgY",
    title: "Fledermausland - Trailerpark",
  },
  {
    id: 22,
    img: "https://img.youtube.com/vi/vqRh2K7QAgo/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/vqRh2K7QAgo",
    title: "Versager - Sudden",
  },
  {
    id: 23,
    img: "https://img.youtube.com/vi/AbK3IeO-qU8/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/AbK3IeO-qU8",
    title: "Ich will das Haus - Pater Vortex",
  },
  {
    id: 24,
    img: "https://img.youtube.com/vi/axMQUha_oSE/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/axMQUha_oSE",
    title: "Betta Recognize - Pater Vortex",
  },
  {
    id: 25,
    img: "https://img.youtube.com/vi/J5-rJsiKJng/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/J5-rJsiKJng",
    title: "Ms. Jackson - Pashanim",
  },
  {
    id: 26,
    img: "https://img.youtube.com/vi/KcEnWYSfDpQ/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/KcEnWYSfDpQ",
    title: "Einer von Millionen - FaithMC",
  },
  {
    id: 27,
    img: "https://img.youtube.com/vi/Vahujobn2b8/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/Vahujobn2b8",
    title: "Giving Me - Jazzy",
  },
  {
    id: 28,
    img: "https://img.youtube.com/vi/PjKo6Cw48zg/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/PjKo6Cw48zg",
    title: "You're Dead - Harriers Of Discord",
  },
  {
    id: 29,
    img: "https://img.youtube.com/vi/8L6T6Yj5u4k/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/8L6T6Yj5u4k",
    title: "The Last Video - Abba",
  },
  {
    id: 30,
    img: "https://img.youtube.com/vi/oGdVf1l9xmc/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/oGdVf1l9xmc",
    title: "Hard Times - The Continental",
  },
  {
    id: 31,
    img: "https://img.youtube.com/vi/FXG_I_tf_i4/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/FXG_I_tf_i4",
    title: "Escape - Rupert Holmes",
  },
  {
    id: 32,
    img: "https://img.youtube.com/vi/wK-8TCDrbV8/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/wK-8TCDrbV8",
    title: "I Think I'm OKAY - Machine Gun Kelly",
  },
  {
    id: 33,
    img: "https://img.youtube.com/vi/Fp0BScQSSvg/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/Fp0BScQSSvg",
    title: "Rap Devil - Machine Gun Kelly",
  },
  {
    id: 34,
    img: "https://img.youtube.com/vi/wtj-Au3dR5M/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/wtj-Au3dR5M",
    title: "Black Tiger Sex Machine x Hairitage - Resistance ft. Hyro The Hero",
  },
  {
    id: 35,
    img: "https://img.youtube.com/vi/aS8fgideUmQ/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/aS8fgideUmQ",
    title: "Summervibes 2019 - Joost",
  },
  {
    id: 36,
    img: "https://img.youtube.com/vi/NtYPh5Lh9HA/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/NtYPh5Lh9HA",
    title: "Amsterdamned - Yellow Claw",
  },
  {
    id: 37,
    img: "https://img.youtube.com/vi/aXsLlOPwe48/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/aXsLlOPwe48",
    title: "Ummet Ozcan X Otyken Altay",
  },
  {
    id: 38,
    img: "https://img.youtube.com/vi/vopMx1_7Ojg/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/vopMx1_7Ojg",
    title:
      "NiNi Music - HOMELAND (Taiwan Folk Metal) ft. Jayant Bhadula of Bloodywood",
  },
  {
    id: 39,
    img: "https://img.youtube.com/vi/hkij4LvACZ0/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/hkij4LvACZ0",
    title: "BABYMETAL - メタり！！ (feat. Tom Morello)",
  },
  {
    id: 40,
    img: "https://img.youtube.com/vi/YsGjFh1ke44/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/YsGjFh1ke44",
    title: "Taco - Puttin' On The Ritz",
  },
  {
    id: 41,
    img: "https://img.youtube.com/vi/thJgU9jkdU4/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/thJgU9jkdU4",
    title: "Rammstein - Dicke Titten",
  },
  {
    id: 42,
    img: "https://img.youtube.com/vi/0y_3Ax7XabI/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/0y_3Ax7XabI",
    title:
      "MURAMASA 【村正】 ☯ Japanese Trap & Bass Type Beats ☯ Trapanese Drift Hip Hop Music Mix",
  },
  {
    id: 43,
    img: "https://img.youtube.com/vi/bPTjayue58I/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/bPTjayue58I",
    title:
      "HATTORI V2 【服部】 ~ ☯ Japanese Trap & Bass Type Beat ☯ Trapanese Lofi Hip Hop Music Mix ",
  },
  {
    id: 44,
    img: "https://img.youtube.com/vi/4oRLHlb5d5c/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/4oRLHlb5d5c",
    title: "Ummet Ozcan - Bifrost",
  },
  {
    id: 45,
    img: "https://img.youtube.com/vi/pHMH408ltEM/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/pHMH408ltEM",
    title: "ATARASHII GAKKO! - Tokyo Calling",
  },
  {
    id: 46,
    img: "https://img.youtube.com/vi/-ew_bfFvros/maxresdefault.jpg",
    link: "https://www.youtube-nocookie.com/embed/-ew_bfFvros",
    title: "Home Free - Man of Constant Sorrow",
  },
];

const gallery = document.querySelector(".videos");
videos.forEach((item) => {
  const tag = document.createElement("figure");
  tag.innerHTML = `<a href="${item.link}" target="_blank" rel="noopener noreferrer"><picture><img src="${item.img}" alt="image loading" loading="lazy"/></picture><figcaption>${item.title}</figcaption></a>`;
  gallery.appendChild(tag);
});