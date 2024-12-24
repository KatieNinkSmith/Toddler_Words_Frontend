const words = [
  {
    word: "Cat",
    image:
      "https://plus.unsplash.com/premium_photo-1707353402061-c31b6ba8562e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Dog",
    image:
      "https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3Ds",
  },
  {
    word: "Horse",
    image:
      "https://images.unsplash.com/photo-1534774452219-dbbf8eb7c543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxob3JzZXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    word: "Pig",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlnfGVufDB8fDB8fHww",
  },

  {
    word: "Chicken",
    image:
      "https://plus.unsplash.com/premium_photo-1669393545234-f91f4ae5c91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
  },

  {
    word: "Fish",
    image:
      "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY2fHxmaXNofGVufDB8fDB8fHww",
  },

  {
    word: "Lion",
    image:
      "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Elephant",
    image:
      "https://images.unsplash.com/photo-1526226128118-9ef71fc2f34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZXBoYW50fGVufDB8fDB8fHww",
  },
  {
    word: "Crab",
    image:
      "https://images.unsplash.com/photo-1723407036365-56b0c501f516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNyYWJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Bear",
    image:
      "https://plus.unsplash.com/premium_photo-1664298004972-af1ad3b52321?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Alligator",
    image:
      "https://plus.unsplash.com/premium_photo-1667667846042-cebd599628d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxsaWdhdG9yfGVufDB8fDB8fHww",
  },
  {
    word: "Frog",
    image:
      "https://images.unsplash.com/photo-1502780402662-acc01c084a25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZyb2d8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Goat",
    image:
      "https://images.unsplash.com/photo-1517411925961-8a5ea19bd27b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdvYXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Jellyfish",
    image:
      "https://images.unsplash.com/photo-1572705691113-72d5bbd51844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGplbGx5ZmlzaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Kangaroo",
    image:
      "https://images.unsplash.com/photo-1534507035278-5d44aaaffe3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2FuZ2Fyb298ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Monkey",
    image:
      "https://plus.unsplash.com/premium_photo-1661847226434-d4d7585756f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fG1vbmtleXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Rabbit",
    image:
      "https://images.unsplash.com/photo-1629898569904-669319348211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Octopus",
    image:
      "https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jdG9wdXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Snake",
    image:
      "https://images.unsplash.com/photo-1519368334033-6aab66302ffc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNuYWtlfGVufDB8fDB8fHww",
  },
  {
    word: "Tiger",
    image:
      "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGlnZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Whale",
    image:
      "https://plus.unsplash.com/premium_photo-1724624771062-017e558eb947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdoYWxlfGVufDB8fDB8fHww",
  },
  {
    word: "Fox",
    image:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm94fGVufDB8fDB8fHww",
  },
  {
    word: "Yak",
    image:
      "https://images.unsplash.com/photo-1615801626674-7147f40de968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlha3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Zebra",
    image:
      "https://images.unsplash.com/photo-1526319238109-524eecb9b913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHplYnJhfGVufDB8fDB8fHww",
  },
  {
    word: "Cow",
    image:
      "https://images.unsplash.com/photo-1676940722449-5ef1bcd6732d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDIzfHxjb3d8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Duck",
    image:
      "https://images.unsplash.com/photo-1484704407203-402da6f3879d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGR1Y2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Sheep",
    image:
      "https://images.unsplash.com/photo-1554755209-85e44182e019?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hlZXB8ZW58MHx8MHx8fDA%3D",
  },
];

export default words;
