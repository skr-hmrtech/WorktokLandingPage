import { 
  serviceCategories, 
  cities, 
  serviceProviders, 
  serviceRequests, 
  reviews,
  type ServiceCategory,
  type City,
  type ServiceProvider,
  type ServiceRequest,
  type Review,
  type InsertServiceCategory,
  type InsertCity,
  type InsertServiceProvider,
  type InsertServiceRequest,
  type InsertReview
} from "@shared/schema";

export interface IStorage {
  // Service Categories
  getServiceCategories(): Promise<ServiceCategory[]>;
  createServiceCategory(category: InsertServiceCategory): Promise<ServiceCategory>;

  // Cities
  getCities(): Promise<City[]>;
  createCity(city: InsertCity): Promise<City>;

  // Service Providers
  getServiceProviders(filters?: { categoryId?: number; cityId?: number; search?: string }): Promise<ServiceProvider[]>;
  getServiceProvider(id: number): Promise<ServiceProvider | undefined>;
  getFeaturedProviders(): Promise<ServiceProvider[]>;
  createServiceProvider(provider: InsertServiceProvider): Promise<ServiceProvider>;

  // Service Requests
  getServiceRequests(): Promise<ServiceRequest[]>;
  createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest>;

  // Reviews
  getReviewsByProviderId(providerId: number): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;

  // Statistics
  getStats(): Promise<{
    verifiedProviders: number;
    completedServices: number;
    averageRating: number;
    cities: number;
  }>;
}

export class MemStorage implements IStorage {
  private serviceCategories: Map<number, ServiceCategory>;
  private cities: Map<number, City>;
  private serviceProviders: Map<number, ServiceProvider>;
  private serviceRequests: Map<number, ServiceRequest>;
  private reviews: Map<number, Review>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.serviceCategories = new Map();
    this.cities = new Map();
    this.serviceProviders = new Map();
    this.serviceRequests = new Map();
    this.reviews = new Map();
    this.currentIds = {
      categories: 1,
      cities: 1,
      providers: 1,
      requests: 1,
      reviews: 1,
    };

    this.initializeData();
  }

  private initializeData() {
    // Initialize service categories
    const categories = [
      { name: "Plumbing", nameAr: "السباكة", icon: "fas fa-wrench", color: "text-iraq-green", providerCount: 250 },
      { name: "Electrical", nameAr: "الكهرباء", icon: "fas fa-bolt", color: "text-yellow-600", providerCount: 180 },
      { name: "AC Repair", nameAr: "تصليح التكييف", icon: "fas fa-snowflake", color: "text-blue-600", providerCount: 320 },
      { name: "Cleaning", nameAr: "التنظيف", icon: "fas fa-broom", color: "text-purple-600", providerCount: 400 },
      { name: "Painting", nameAr: "الدهان", icon: "fas fa-paint-roller", color: "text-orange-600", providerCount: 150 },
      { name: "Carpentry", nameAr: "النجارة", icon: "fas fa-hammer", color: "text-red-600", providerCount: 95 },
    ];

    categories.forEach(cat => {
      const id = this.currentIds.categories++;
      this.serviceCategories.set(id, { id, ...cat });
    });

    // Initialize cities
    const cityData = [
      { name: "Baghdad", nameAr: "بغداد" },
      { name: "Basra", nameAr: "البصرة" },
      { name: "Erbil", nameAr: "أربيل" },
      { name: "Mosul", nameAr: "الموصل" },
      { name: "Najaf", nameAr: "النجف" },
      { name: "Karbala", nameAr: "كربلاء" },
    ];

    cityData.forEach(city => {
      const id = this.currentIds.cities++;
      this.cities.set(id, { id, ...city });
    });

    // Initialize service providers
    const providers = [
      {
        name: "Ahmed Al-Baghdadi",
        profession: "Master Plumber",
        professionAr: "سباك خبير",
        bio: "15+ years of experience in residential and commercial plumbing. Specializes in emergency repairs and installations.",
        cityId: 1,
        categoryId: 1,
        rating: "4.9",
        reviewCount: 127,
        phone: "+964 770 123 4567",
        email: "ahmed.plumber@khadamati.iq",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        verified: true,
        yearsExperience: 15,
        specialties: ["Emergency Repairs", "Pipe Installation", "Water Heater Repair"],
      },
      {
        name: "Fatima Al-Basri",
        profession: "Premium Cleaning Specialist",
        professionAr: "أخصائية تنظيف محترفة",
        bio: "Professional deep cleaning services for homes and offices. Eco-friendly products and reliable team.",
        cityId: 2,
        categoryId: 4,
        rating: "4.8",
        reviewCount: 89,
        phone: "+964 780 234 5678",
        email: "fatima.cleaning@khadamati.iq",
        avatar: "https://pixabay.com/get/g0c40ed0c31cea3d8695f2d21770b9f814dec2bc26629ca1c0f3c23ad397b5c73143855b216b2b6292c3036d5c935054ba2e8904658960ef902104a53869a4b6b_1280.jpg",
        verified: true,
        yearsExperience: 8,
        specialties: ["Deep Cleaning", "Office Cleaning", "Eco-friendly Products"],
      },
      {
        name: "Omar Al-Kurdish",
        profession: "Licensed Electrician",
        professionAr: "كهربائي مرخص",
        bio: "Certified electrical contractor with expertise in home wiring, panel upgrades, and smart home installations.",
        cityId: 3,
        categoryId: 2,
        rating: "5.0",
        reviewCount: 156,
        phone: "+964 750 345 6789",
        email: "omar.electric@khadamati.iq",
        avatar: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        verified: true,
        yearsExperience: 12,
        specialties: ["Home Wiring", "Panel Upgrades", "Smart Home Installation"],
      },
    ];

    providers.forEach(provider => {
      const id = this.currentIds.providers++;
      this.serviceProviders.set(id, { id, ...provider });
    });

    // Initialize reviews
    const reviewData = [
      {
        providerId: 1,
        customerName: "Layla Hassan",
        rating: 5,
        comment: "Ahmed fixed our kitchen sink perfectly. Very professional and punctual!",
        date: "2024-01-15",
      },
      {
        providerId: 1,
        customerName: "Mohammed Ali",
        rating: 5,
        comment: "Excellent plumbing service. Highly recommended for emergency repairs.",
        date: "2024-01-10",
      },
      {
        providerId: 2,
        customerName: "Sara Ahmad",
        rating: 5,
        comment: "Fatima's team did an amazing job cleaning our office. Very thorough!",
        date: "2024-01-12",
      },
      {
        providerId: 3,
        customerName: "Kareem Saeed",
        rating: 5,
        comment: "Omar installed our new electrical panel perfectly. Great work!",
        date: "2024-01-08",
      },
    ];

    reviewData.forEach(review => {
      const id = this.currentIds.reviews++;
      this.reviews.set(id, { id, ...review });
    });
  }

  async getServiceCategories(): Promise<ServiceCategory[]> {
    return Array.from(this.serviceCategories.values());
  }

  async createServiceCategory(category: InsertServiceCategory): Promise<ServiceCategory> {
    const id = this.currentIds.categories++;
    const newCategory: ServiceCategory = { id, providerCount: 0, ...category };
    this.serviceCategories.set(id, newCategory);
    return newCategory;
  }

  async getCities(): Promise<City[]> {
    return Array.from(this.cities.values());
  }

  async createCity(city: InsertCity): Promise<City> {
    const id = this.currentIds.cities++;
    const newCity: City = { id, ...city };
    this.cities.set(id, newCity);
    return newCity;
  }

  async getServiceProviders(filters?: { categoryId?: number; cityId?: number; search?: string }): Promise<ServiceProvider[]> {
    let providers = Array.from(this.serviceProviders.values());

    if (filters) {
      if (filters.categoryId) {
        providers = providers.filter(p => p.categoryId === filters.categoryId);
      }
      if (filters.cityId) {
        providers = providers.filter(p => p.cityId === filters.cityId);
      }
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        providers = providers.filter(p => 
          p.name.toLowerCase().includes(searchLower) ||
          p.profession.toLowerCase().includes(searchLower) ||
          p.bio.toLowerCase().includes(searchLower)
        );
      }
    }

    return providers;
  }

  async getServiceProvider(id: number): Promise<ServiceProvider | undefined> {
    return this.serviceProviders.get(id);
  }

  async getFeaturedProviders(): Promise<ServiceProvider[]> {
    return Array.from(this.serviceProviders.values())
      .filter(p => p.verified && parseFloat(p.rating) >= 4.8)
      .slice(0, 6);
  }

  async createServiceProvider(provider: InsertServiceProvider): Promise<ServiceProvider> {
    const id = this.currentIds.providers++;
    const newProvider: ServiceProvider = { 
      id, 
      rating: "0.0", 
      reviewCount: 0, 
      ...provider 
    };
    this.serviceProviders.set(id, newProvider);
    return newProvider;
  }

  async getServiceRequests(): Promise<ServiceRequest[]> {
    return Array.from(this.serviceRequests.values());
  }

  async createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest> {
    const id = this.currentIds.requests++;
    const newRequest: ServiceRequest = { 
      id, 
      status: "pending", 
      createdAt: new Date(),
      ...request 
    };
    this.serviceRequests.set(id, newRequest);
    return newRequest;
  }

  async getReviewsByProviderId(providerId: number): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(r => r.providerId === providerId);
  }

  async createReview(review: InsertReview): Promise<Review> {
    const id = this.currentIds.reviews++;
    const newReview: Review = { id, ...review };
    this.reviews.set(id, newReview);
    return newReview;
  }

  async getStats(): Promise<{
    verifiedProviders: number;
    completedServices: number;
    averageRating: number;
    cities: number;
  }> {
    const providers = Array.from(this.serviceProviders.values());
    const verifiedProviders = providers.filter(p => p.verified).length;
    const completedServices = 15000; // Mock data
    const avgRating = providers.reduce((sum, p) => sum + parseFloat(p.rating), 0) / providers.length;
    const cities = this.cities.size;

    return {
      verifiedProviders,
      completedServices,
      averageRating: Math.round(avgRating * 10) / 10,
      cities,
    };
  }
}

export const storage = new MemStorage();
