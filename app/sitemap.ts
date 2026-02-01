import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tudocroche.com/",
      lastModified: new Date()
    },
    {
      url: "https://tudocroche.com/login",
      lastModified: new Date()
    },
    {
      url: "https://tudocroche.com/cadastro",
      lastModified: new Date()
    },
    {
      url: "https://tudocroche.com/receitas/nova",
      lastModified: new Date()
    }
  ];
}
