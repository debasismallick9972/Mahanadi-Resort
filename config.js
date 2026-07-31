/* ═══════════════════════════════════════════════════════════════
   Mahanadi Resort — editable settings (small & easy to edit on GitHub)
   ---------------------------------------------------------------
   Photos live inside index.html (not here), so this file stays tiny.
   Edit prices, offer text, and booking dates below, then Commit.
   Do NOT use the Admin page's Download button — it re-bloats this file.
   ═══════════════════════════════════════════════════════════════ */
window.SITE_CONFIG = {
  name: "Mahanadi",
  brandLine: "Riverside Resort",

  heroTag: "On the banks of the Mahanadi",
  heroTitle: "Mahanadi Resort",
  heroLede: "A riverside destination in Odisha for weddings, receptions, birthdays and every celebration worth remembering \u2014 where the river's calm meets a resort built for once-in-a-lifetime days.",

  phone: "+919853909972",
  phoneDisplay: "+91 98539 09972",
  email: "hello@mahanadiresort.in",
  address: "Mahanadi River front, Near Shanidev Mandir, Sirlo Durga Road, Cuttack, 754132, Odisha, India",
  hours: "Every day \u00b7 9:00 AM \u2013 9:00 PM",
  mapQuery: "Mahanadi Resort, Sirlo, Durga Road, Cuttack, Odisha 754132",
  mapLink: "",
  mapEmbed: "",
  googleReviewLink: "",

  offer: { show: true, text: "\u2726 Monsoon special \u2014 15% off weekday weddings booked this month \u2726" },

  /* Prices (\u20b9). Your custom prices are kept. */
  price: { roomPerNight:500, mandap:15000, foodVeg:200, foodNonVeg:350, foodPerPlate:500, flower:3000, photo:10000, dj:10000, stage:10000, cleaning:1000, defaultRooms:1, defaultPlates:1 },

  packages: [
    { n: "Birthday",        from: "Starting from",      amt: "\u20b91,499",  feat: ["Themed decoration","Cake table & backdrop","Music & lighting","Food for 25 guests","2 hrs photography"], f: false },
    { n: "Haldi & Mehendi", from: "Starting from",      amt: "\u20b92,999",  feat: ["Traditional floral setup","Marigold & greens d\u00e9cor","DJ / dhol","Snacks & chaat counter","Photography"], f: false },
    { n: "Sangeet Night",   from: "Starting from",      amt: "\u20b94,999",  feat: ["LED stage & dance floor","Pro DJ + lighting","Green room","Buffet dinner","Photo + video"], f: false },
    { n: "Grand Wedding",   from: "All-inclusive from", amt: "\u20b930,000", feat: ["Flower mandap","D\u00e9cor + reception","Dinner for 300","8 rooms \u00b7 1 night","Full photo & video"], f: true },
    { n: "Reception",       from: "Starting from",      amt: "\u20b920,000", feat: ["LED stage & backdrop","VIP seating","Buffet for 300","Live music","Photography"], f: false },
    { n: "Get-together",    from: "Starting from",      amt: "\u20b91,499",  feat: ["Lawn or hall","Music system","Lunch/dinner buffet","Up to 50 guests","Basic d\u00e9cor"], f: false }
  ],

  /* ── BOOKING DATES ── format "YYYY-MM-DD". Red = booked, amber = reserved. */
  bookedDates:   ["2026-08-01", "2026-08-15", "2026-08-17"],
  reservedDates: ["2026-08-09", "2026-08-10", "2026-08-18"]
};
