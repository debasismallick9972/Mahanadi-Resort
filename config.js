/* ═══════════════════════════════════════════════════════════════
   Mahanadi Resort — site content
   ---------------------------------------------------------------
   Updated from the Admin page (admin.html). To change something,
   open admin.html, edit, click "Download config.js", then upload
   this file back to your host (replacing the old one).
   Photos live as separate files (rooms.jpg, mandap.jpg, garden.jpg)
   — keep them uploaded alongside this file.
   ═══════════════════════════════════════════════════════════════ */
window.SITE_CONFIG = {
  name: "Mahanadi",
  brandLine: "Riverside Resort",

  heroTag: "On the banks of the Mahanadi",
  heroTitle: "Mahanadi Resort",
  heroLede: "A riverside destination in Odisha for weddings, receptions, birthdays and every celebration worth remembering — where the river's calm meets a resort built for once-in-a-lifetime days.",

  phone: "+919853909972",
  phoneDisplay: "+91 98539 09972",
  email: "hello@mahanadiresort.in",
  address: "Mahanadi Riverfront Estate, Odisha, India",
  hours: "Every day · 9:00 AM – 9:00 PM",
  mapQuery: "Mahanadi Resort Odisha",

  /* Location & reviews. Paste your real Google links here (leave blank to auto-use the name search). */
  mapLink: "",
  mapEmbed: "",
  googleReviewLink: "",

  offer: { show: true, text: "✦ Monsoon special — 15% off weekday weddings booked this month ✦" },

  price: {
    roomPerNight: 3500,
    mandap: 75000,
    foodVeg: 450,
    foodNonVeg: 650,
    foodPerPlate: 550,
    flower: 45000,
    photo: 35000,
    dj: 25000,
    stage: 30000,
    cleaning: 8000,
    defaultRooms: 4,
    defaultPlates: 150
  },

  /* Real photos (files kept next to this config). hero = background of the top section. */
  images: {
    hero: "garden.jpg",
    rooms: "rooms.jpg",
    mandap: "mandap.jpg",
    dining: ""
  },

  gallery: [
    { url: "mandap.jpg", caption: "Wedding Mandap at Dusk", category: "Wedding" },
    { url: "rooms.jpg",  caption: "The Villa at Twilight",  category: "Rooms" },
    { url: "garden.jpg", caption: "Lantern Garden Swing",   category: "Décor" }
  ],


  /* Package cards. Change the number inside "amt" (keep the ₹ and comma). */
  packages: [
    { n: "Birthday",        from: "Starting from",     amt: "₹1,499",  feat: ["Themed decoration","Cake table & backdrop","Music & lighting","Food for 25 guests","2 hrs photography"], f: false },
    { n: "Haldi & Mehendi", from: "Starting from",     amt: "₹2,999",  feat: ["Traditional floral setup","Marigold & greens décor","DJ / dhol","Snacks & chaat counter","Photography"], f: false },
    { n: "Sangeet Night",   from: "Starting from",     amt: "₹4,999",  feat: ["LED stage & dance floor","Pro DJ + lighting","Green room","Buffet dinner","Photo + video"], f: false },
    { n: "Grand Wedding",   from: "All-inclusive from", amt: "₹30,000", feat: ["Flower mandap","Décor + reception","Dinner for 300","8 rooms · 1 night","Full photo & video"], f: true },
    { n: "Reception",       from: "Starting from",     amt: "₹20,000", feat: ["LED stage & backdrop","VIP seating","Buffet for 300","Live music","Photography"], f: false },
    { n: "Get-together",    from: "Starting from",     amt: "₹1,499",  feat: ["Lawn or hall","Music system","Lunch/dinner buffet","Up to 50 guests","Basic décor"], f: false }
  ],

  bookedDates: ["2026-08-01", "2026-08-15"],
  reservedDates: ["2026-08-09", "2026-08-10"]
};
