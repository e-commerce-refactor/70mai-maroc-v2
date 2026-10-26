export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  priceMad: number;
  originalPriceMad?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviewsCount?: number;
  stockLeft?: number;
  specs?: Record<string, string>;
  description?: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": "support-70mai-t800",
    "name": "Support 70mai T800",
    "subtitle": "Accessoires",
    "category": "Accessoires",
    "priceMad": 199,
    "originalPriceMad": 299,
    "image": "https://cdn.shopify.com/s/files/1/0679/5608/0711/files/61SMxEJQ0rL._AC_UF1000_1000_QL80.jpg?v=1792410421",
    "badge": "BESTSELLER",
    "description": "【Only for T800】70mai Dash Cam Accessory, Accessories for T800 Brand 70mai Model Name ACC-T800 Vehicle Service Type Car Connectivity Technology no Special Featur...",
    "stockLeft": null
  },
  {
    "id": "pack-70mai-a810-lite-4k-4g",
    "name": "Pack 70mai A810 Lite 4K HDR 4G | Dashcam Avant + Arrière",
    "subtitle": "Les Packs",
    "category": "Les Packs",
    "priceMad": 3399,
    "originalPriceMad": null,
    "image": "https://cdn.shopify.com/s/files/1/0679/5608/0711/files/PACK-A810-LITE-WEBSITE.webp?v=1792410414",
    "badge": "LIVRAISON 24H",
    "description": "Pack 70mai A810 Lite 4K HDR au Maroc Le Pack 70mai A810 Lite 4K HDR réunit tout ce qu'il faut pour protéger votre voiture sur la route et en stationnement : la ...",
    "stockLeft": null
  },
  {
    "id": "70mai-a810-lite-4k-4g",
    "name": "70mai Dash Cam A810 Lite 4K HDR 4G | Avant + Arrière",
    "subtitle": "DashCams",
    "category": "DashCams",
    "priceMad": 1999,
    "originalPriceMad": 2199,
    "image": "https://cdn.shopify.com/s/files/1/0679/5608/0711/files/A810-LITE-WEBSITE_2b6a1e0f-6abf-4598-92d6-999fd0aabde6.png?v=1792410403",
    "badge": "LIVRAISON 24H",
    "description": "La 70mai A810 Lite 4K HDR en bref La 70mai Dash Cam A810 Lite 4K HDR filme votre trajet avec une caméra avant 4K et une caméra arrière Full HD 1080P. Son format...",
    "stockLeft": null
  },
  {
    "id": "pack-70mai-dash-cam-a210-set-1080p-hdr-gps",
    "name": "Pack 70mai Dash Cam A210 Set 1080P HDR GPS",
    "subtitle": "Les Packs",
    "category": "Les Packs",
    "priceMad": 1749,
    "originalPriceMad": null,
    "image": "https://cdn.shopify.com/s/files/1/0679/5608/0711/files/PACK-A210-WEBSITE.webp?v=1792410427",
    "badge": "LIVRAISON 24H",
    "description": "Pack 70mai A210 1080P HDR au Maroc Le Pack 70mai A210 offre une protection complète de votre véhicule avec une caméra avant A210 et une caméra arrière RC21. Les...",
    "stockLeft": null
  },
  {
    "id": "70mai-dash-cam-a210-set-1080p-hdr-gps",
    "name": "70mai Dash Cam A210 Set 1080P HDR GPS",
    "subtitle": "DashCams",
    "category": "DashCams",
    "priceMad": 1099,
    "originalPriceMad": 1300,
    "image": "https://cdn.shopify.com/s/files/1/0679/5608/0711/files/A210-WEBSITE.webp?v=1792410424",
    "badge": "LIVRAISON 24H",
    "description": "70mai A210 1080P HDR au Maroc La 70mai Dash Cam A210 est une caméra embarquée compacte qui enregistre vos trajets en 1080P avec HDR, vision nocturne améliorée e...",
    "stockLeft": null
  },
  {
    "id": "70mai-dash-cam-a800se-4k-hdr-4g",
    "name": "70mai Dash Cam A800SE 4K HDR 4G",
    "subtitle": "DashCams",
    "category": "DashCams",
    "priceMad": 1799,
    "originalPriceMad": 2000,
    "image": "https://cdn.shopify.com/s/files/1/0679/5608/0711/files/A800SE-4G.webp?v=1792410405",
    "badge": "LIVRAISON 24H",
    "description": "La Dash Cam A800SE 4K 4G HDR en bref La 70mai Dash Cam A800SE 4K 4G HDR offre une image 4K nette, une protection avant/arrière et une surveillance intelligente ...",
    "stockLeft": null
  },
  {
    "id": "pack-70mai-dash-cam-a800se-4k-hdr-4g",
    "name": "Pack 70mai Dash Cam A800SE 4K HDR 4G",
    "subtitle": "Les Packs",
    "category": "Les Packs",
    "priceMad": 2649,
    "originalPriceMad": null,
    "image": "https://cdn.shopify.com/s/files/1/0679/5608/0711/files/PACK-A800SE.webp?v=1792410410",
    "badge": "LIVRAISON 24H",
    "description": "Le pack A800SE 4K 4G en bref Le Pack 70mai A800SE 4K HDR 4G réunit tout ce qu'il faut pour protéger votre voiture dès l'installation : la dashcam avant et arriè...",
    "stockLeft": null
  },
  {
    "id": "70mai-hardwire-kit-up06-reglable-alimentation-parking-24-7-avec-protection-batterie",
    "name": "70mai Adjustable Hardwire Kit (UP06)",
    "subtitle": "Hardwire Kits",
    "category": "Hardwire Kits",
    "priceMad": 389,
    "originalPriceMad": 499,
    "image": "https://cdn.shopify.com/s/files/1/0679/5608/0711/files/UP06_27_11zon.webp?v=1792410316",
    "badge": "LIVRAISON 24H",
    "description": "70mai Hardwire Kit UP06 Réglable – Alimentation Parking 24/7 avec Protection Batterie",
    "stockLeft": null
  }
];
