import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Přidá lomítko na konec cest
  images: {
    unoptimized: true, // Zakáže optimalizaci obrázků
  },
};

export default nextConfig;
