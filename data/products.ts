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
    "id": "dashcam-omni-4k-360",
    "name": "70mai Maroc Dashcam Omni 360° 4K HDR",
    "subtitle": "Capteur Sony Starvis 2 • Surveillance Parking 24/7 & IA Détection",
    "category": "Dashcams 4K",
    "priceMad": 1490,
    "originalPriceMad": 1890,
    "badge": "BESTSELLER CASABLANCA",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    "description": "La référence absolue des caméras embarquées au Maroc. Rotation motorisée à 360°, vision nocturne HDR exceptionnelle et enregistrement automatique en cas de choc en stationnement.",
    "stockLeft": 4
  },
  {
    "id": "dashcam-a810-dual-vision",
    "name": "70mai Maroc Dual Vision Avant & Arrière 4K",
    "subtitle": "Pack Caméra Avant 4K + Caméra Arrière 1080P & GPS Intégré",
    "category": "Packs Sécurité",
    "priceMad": 1850,
    "originalPriceMad": 2200,
    "badge": "PACK DUO AVANT/ARRIÈRE",
    "image": "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80",
    "description": "Protection intégrale à l'avant et à l'arrière de votre véhicule. Angle ultra-large 170°, alerte franchissement de ligne et sauvegarde cloud d'urgence.",
    "stockLeft": 2
  },
  {
    "id": "hardwire-kit-parking-24h",
    "name": "Kit Câblage Parking 24/7 Hardwire Kit",
    "subtitle": "Câblage direct boîte à fusibles avec protection anti-décharge batterie",
    "category": "Accessoires & Câblage",
    "priceMad": 249,
    "originalPriceMad": 350,
    "badge": "INSTALLATION DISPO",
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    "description": "Permet à votre dashcam de filmer en continu lorsque le moteur est éteint sans jamais vider la batterie de votre voiture.",
    "stockLeft": 7
  }
];
