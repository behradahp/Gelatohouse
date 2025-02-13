export type SliderImages = {
  src: string;
};

export interface Category {
  id: number;
  title: string;
  logo: string;
  customIcon: string;
  compact: boolean;
  index: number;
  isActive: boolean;
  forRamadan: boolean;
  forHalfReady: boolean;
  digitalMonitorOrderIndex: number;
  showInDigitalMonitor: boolean;
  sub: Sub[];
  kioskOrderIndex: number;
  showInKiosk: boolean;
}

export interface Sub {
  id: number;
  title: string;
  description: string;
  img: string;
  priceLabel: string;
  index: number;
  food: Food[];
}

export interface Food {
  index: number;
  id: number;
  img: string;
  archive: boolean;
  ingredient: string;
  title: string;
  stock: boolean;
  available: boolean;
  unavailableText: string;
  price: number;
  discountPercentage: number;
  discount: number;
  foodTags: null | null | string | string;
  saleOnRamadan: boolean;
  packaging: number;
  halfReady: boolean;
  pickupOnly: boolean;
  isTaxable: boolean;
  taxPercent: number;
  d0: boolean;
  d1: boolean;
  d2: boolean;
  d3: boolean;
  d4: boolean;
  d5: boolean;
  d6: boolean;
  saleOnNoon: boolean;
  saleOnNight: boolean;
  saleOnBreakfast: boolean;
  showInDigitalMonitor: boolean;
  digitalMonitorOrderIndex: number;
  packagingTaxPercent: number;
  packagingIsTaxable: boolean;
  showInKiosk: boolean;
  kioskOrderIndex: number;
}

export type Card = {
  id: number;
  item: Food;
  count: number;
};
