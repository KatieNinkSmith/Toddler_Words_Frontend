const words = [
  {
    word: "Apple",
    image:
      "https://plus.unsplash.com/premium_photo-1681913119645-9cef502835fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGFwcGxlfGVufDB8fDB8fHww",
  },
  {
    word: "Banana",
    image:
      "https://plus.unsplash.com/premium_photo-1685946109192-b9b1867bf0c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJhbmFuYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Broccoli",
    image:
      "https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D",
  },

  {
    word: "Cucumber",
    image:
      "https://plus.unsplash.com/premium_photo-1701798480512-de11ff89d567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGN1Y3VtYmVyfGVufDB8fDB8fHww",
  },

  {
    word: "Kiwi",
    image:
      "https://plus.unsplash.com/premium_photo-1671379516252-5cac4b59bd66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpd2l8ZW58MHx8MHx8fDA%3D",
  },

  {
    word: "Carrots",
    image:
      "https://images.unsplash.com/photo-1522184216316-3c25379f9760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhcnJvdHN8ZW58MHx8MHx8fDA%3D",
  },

  {
    word: "Bread",
    image:
      "https://plus.unsplash.com/premium_photo-1723601096690-8ef3bcc221d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxicmVhZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Shrimp",
    image:
      "https://images.unsplash.com/photo-1668101325353-1664c1cf43c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHNocmltcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Eggs",
    image:
      "https://images.unsplash.com/photo-1521513919009-be90ad555598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTExfHxlZ2d8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Milk",
    image:
      "https://plus.unsplash.com/premium_photo-1694481099872-29a6ece2672c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1pbGt8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Honey",
    image:
      "https://plus.unsplash.com/premium_photo-1664273586802-2fd61b1e193a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SG9uZXl8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Beans",
    image:
      "https://plus.unsplash.com/premium_photo-1664007711018-d7cb92e664b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhbnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Mango",
    image:
      "https://plus.unsplash.com/premium_photo-1695055513622-2516d4dc9894?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzkzfHxtYW5nb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Avocado",
    image:
      "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2b2NhZG98ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Yogurt",
    image:
      "https://images.unsplash.com/photo-1702165637233-3afe8ef1ce8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU5fHx5b2d1cnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Watermelon",
    image:
      "https://plus.unsplash.com/premium_photo-1663855531381-f9c100b3c48f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdhdGVybWVsb258ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Peanuts",
    image:
      "https://plus.unsplash.com/premium_photo-1701210419456-78f3e42789ff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVhbnV0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Pear",
    image:
      "https://plus.unsplash.com/premium_photo-1669905375079-5d7e074fc123?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Pumpkin",
    image:
      "https://images.unsplash.com/photo-1506900039127-b1cb41deb557?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVtcGtpbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Coconut",
    image:
      "https://images.unsplash.com/photo-1581453883350-288b2c19bea8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Cauliflower",
    image:
      "https://images.unsplash.com/photo-1683723616147-44545defdc9e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhdWxpZmxvd2VyfGVufDB8fDB8fHww",
  },
  {
    word: "Almond",
    image:
      "https://images.unsplash.com/photo-1523996622746-ae4e4fbb3fc2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxtb25kfGVufDB8fDB8fHww",
  },
  {
    word: "Cantaloupe",
    image:
      "https://plus.unsplash.com/premium_photo-1700089175117-5d24d82c944a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FudGFsb3VwZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Plum",
    image:
      "https://plus.unsplash.com/premium_photo-1700145523324-1da4b9000d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxwbHVtfGVufDB8fDB8fHww",
  },
  {
    word: "Eggplant",
    image:
      "https://plus.unsplash.com/premium_photo-1666270423801-54c311159fcf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGVnZ3BsYW50fGVufDB8fDB8fHww",
  },
  {
    word: "Corn",
    image:
      "https://images.unsplash.com/photo-1692607931390-3a768f3d1a53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvcm58ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Artichoke",
    image:
      "https://images.unsplash.com/photo-1518735869015-566a18eae4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGljaG9rZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Garlic",
    image:
      "https://images.unsplash.com/photo-1625229466998-42ee9c597290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdhcmxpY3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Zucchini",
    image:
      "https://images.unsplash.com/photo-1720240464180-fb4f185ccf1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHx6dWNjaGluaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Onion",
    image:
      "https://images.unsplash.com/photo-1667720250309-abf176d77333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG9uaW9ufGVufDB8fDB8fHww",
  },
  {
    word: "Asparagus",
    image:
      "https://images.unsplash.com/photo-1555704574-f9ecf4717298?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzcGFyYWd1c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Honeydew",
    image:
      "https://images.unsplash.com/photo-1623125489492-6d3641414e37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9uZXlkZXd8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Mushroom",
    image:
      "https://images.unsplash.com/photo-1602664719969-5cb83870efb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxtdXNocm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    word: "Cheese",
    image:
      "https://images.unsplash.com/photo-1667645895855-2d3f7000a7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxjaGVlc2UlMjBmb3IlMjBraWRzfGVufDB8fDB8fHww",
  },
  {
    word: "Kale",
    image:
      "https://plus.unsplash.com/premium_photo-1702574992683-88624a546b9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGthbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    word: "Lemon",
    image:
      "https://images.unsplash.com/photo-1454944338482-a69bb95894af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGxlbW9ufGVufDB8fDB8fHww",
  },
  {
    word: "Celery",
    image:
      "https://plus.unsplash.com/premium_photo-1700773416772-50a83a730f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2VsZXJ5fGVufDB8fDB8fHww",
  },
  {
    word: "Peach",
    image:
      "https://images.unsplash.com/photo-1642372849578-c2142f64add6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBlYWNofGVufDB8fDB8fHww",
  },
  {
    word: "Fig",
    image:
      "https://images.unsplash.com/photo-1506851141243-46bb87f2576c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZpZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default words;
