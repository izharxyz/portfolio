import { MetadataRoute } from "next";

async function getBlogPosts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/posts/`,
      { cache: "force-cache" }
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch blog posts");
    }
    
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    return [];
  }
}

async function getCategories() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/categories/`,
      { cache: "force-cache" }
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching categories for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://izhar.xyz";
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];
  
  // Dynamic routes for blog posts
  const posts = await getBlogPosts();
  const postRoutes = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Dynamic routes for categories
  const categories = await getCategories();
  const categoryRoutes = categories.map((category: any) => ({
    url: `${baseUrl}/blog/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  
  return [...staticRoutes, ...postRoutes, ...categoryRoutes];
}
