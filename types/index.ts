export interface PaginatedAPIResponse<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}

export interface project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    source_code_url: string;
    site_url: string;
    detail: string;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
}

export type CategoryResponse = PaginatedAPIResponse<Category>;

export interface Post {
    title: string;
    description: string;
    image: string;
    categories?: Category[] | null;
    slug: string;
    created_at: string;
    updated_at: string;
}

export interface PostContent {
    image?: string | null;
    content: string;
}

export interface PostDetail extends Post {
    content: PostContent[];
}

export type PostResponse = PaginatedAPIResponse<Post>;