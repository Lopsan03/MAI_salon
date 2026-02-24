export const BUSINESS_INFO = {
  name: "MAI Beauty Center",
  phone: "+52 81 1686 1339",
  whatsapp: "528116861339",
  address: "Av. Prolongación Ruiz Cortines #3000 SN, Plaza Domena, Local 20B, Col. Cumbres la Rioja, 66036 García, N.L., Mexico",
  hours: [
    { day: "Lunes - Viernes", time: "10:00 AM - 8:00 PM" },
    { day: "Sábado", time: "9:00 AM - 7:00 PM" },
    { day: "Domingo", time: "Cerrado" }
  ]
};

export const SERVICES = [
  {
    id: "cejas",
    title: "Cejas y Pestañas",
    description: "Diseño y perfilado experto para resaltar tu mirada.",
    items: [
      { name: "Planchado de Ceja", price: "$280.00" },
      { name: "Ceja HD", price: "$300.00" },
      { name: "Planchado + Depilación", price: "$380.00" },
      { name: "Ceja HD + Depilación", price: "$400.00" },
      { name: "Lifting de Pestañas", price: "$450.00" }
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "unas",
    title: "Uñas / Mani / Pedi",
    description: "Cuidado profesional para tus manos y pies con los mejores productos.",
    items: [
      { name: "Gel", price: "Desde $220.00" },
      { name: "Press On Soft Gel", price: "Desde $400.00" },
      { name: "Rubber", price: "Desde $250.00" },
      { name: "Polygel", price: "Desde $450.00" },
      { name: "Acrílico", price: "Desde $400.00" },
      { name: "Pedicure Spa", price: "$550.00" },
      { name: "Manicure Spa", price: "$350.00" }
    ],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cabello",
    title: "Corte y Estilizado",
    description: "Transforma tu estilo con nuestros expertos en cabello.",
    items: [
      { name: "Corte (Lavado y Secado)", price: "$400.00" },
      { name: "Mascarilla Hidratación + Ampolleta", price: "$550.00" },
      { name: "Estilizado (Wavy, Curlys, Planchado)", price: "Desde $300.00" },
      { name: "Peinado y Maquillaje Social", price: "$1,480.00" },
      { name: "Tinte Completo", price: "Desde $1,200.00" },
      { name: "Keratina / Botox", price: "Desde $1,500.00" }
    ],
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "depilacion",
    title: "Depilación",
    description: "Piel suave y libre de vello con técnicas delicadas.",
    items: [
      { name: "Bikini", price: "$400.00" },
      { name: "Brasil", price: "$650.00" },
      { name: "Full Body", price: "$1,200.00" },
      { name: "Piernas", price: "Desde $450.00" },
      { name: "Bozo", price: "$100.00" },
      { name: "Axila", price: "$250.00" }
    ],
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS = [
  {
    name: "Mariana Rodríguez",
    text: "Excelente servicio, mis cejas quedaron perfectas. El lugar es muy limpio y la atención es de primera.",
    rating: 5
  },
  {
    name: "Carla Gómez",
    text: "Me encanta venir por mi gelish, siempre tienen los colores de temporada y me duran muchísimo.",
    rating: 5
  },
  {
    name: "Sofía Martínez",
    text: "El mejor corte de cabello que me han hecho en García. Muy profesionales y el ambiente es súper relajante.",
    rating: 5
  }
];
