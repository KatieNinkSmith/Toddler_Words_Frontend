const words = [
  {
    word: "Zero",
    image:
      "https://images.unsplash.com/photo-1520413766594-6e635f8d9908?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    word: "One",
    image:
      "https://images.unsplash.com/photo-1560363199-a1264d4ea5fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9uZSUyMDF8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Two",
    image:
      "https://images.unsplash.com/photo-1568548527144-383edf5c2728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHR3byUyMDJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Three",
    image:
      "https://images.unsplash.com/photo-1594760442231-890b76f215e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxudW1iZXIlMjAzfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1560932096-abfff441783a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG51bWJlciUyMDN8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1682429365916-e88d339399d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnVtYmVyJTIwM3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Four",
    image:
      "https://images.unsplash.com/photo-1577936344574-09f7823a8bb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    word: "Five",
    image:
      "https://images.unsplash.com/photo-1526529214883-2db01e17159c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml2ZSUyMDV8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Six",
    image:
      "https://images.unsplash.com/photo-1695671894755-dbea0aab1aaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxzaXglMjA2fGVufDB8fDB8fHww",
  },
  {
    word: "Seven",
    image:
      "https://images.unsplash.com/photo-1571577275698-54f36820ee9b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxudW1iZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Eight",
    image:
      "https://images.unsplash.com/photo-1676944312992-e3181105926a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHxudW1iZXJ8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1674550311045-61b4a5868c7d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxudW1iZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Nine",
    image:
      "https://images.unsplash.com/photo-1643890752084-8e29d4a69779?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3Dhttps://images.unsplash.com/photo-1695084791755-945b0ccb997e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fG5pbmUlMjA5fGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1609447125969-b8553e74cd87?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmluZSUyMDl8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1701686493165-5e9b4d73f7d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxuaW5lfGVufDB8fDB8fHww",
  },
  {
    word: "Ten",
    image:
      "https://images.unsplash.com/photo-1723643614157-c04e5e573844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI4fHx0ZW4lMjAxMHxlbnwwfHwwfHx8MA%3D%3D",
  },
];
export default words;
