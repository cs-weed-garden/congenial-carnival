import axios from 'axios';
import { promises as fs } from 'fs';
import { resolve, join } from 'path';
import crypto from 'crypto';

const BASE_URL = 'https://weed-garden.com';
const GHOST_API_URL = `http://ghost.weed-garden.com/ghost/api/v3/content/posts/?key=1e3deb58b040964cfa7d845781&limit=all`;
const PAGES_DIR = resolve('pages');  // Path to your Nuxt pages directory
const SITEMAP_PATH = resolve('public/sitemap.xml');

// Helper function to recursively read files in a directory
const getNuxtStaticRoutes = async (dir) => {
    const files = await fs.readdir(dir, { withFileTypes: true });
    let routes = [];

    for (const file of files) {
        const filePath = join(dir, file.name);

        if (file.isDirectory()) {
            // Recursively get routes from subdirectories (for nested routes in Nuxt)
            const subRoutes = await getNuxtStaticRoutes(filePath);
            routes = routes.concat(subRoutes);
        } else if (file.isFile()) {
            // Convert the file path to a Nuxt route
            let route = filePath
                .replace(PAGES_DIR, '') // Remove the base 'pages/' directory from the path
                .replace(/\.vue$/, '')  // Remove '.vue' extension
                .replace(/\/index$/, '')  // Remove '/index' to avoid "/about/index" becoming "/about"
                .replace(/\[.*?\]/g, ':slug');  // Convert dynamic routes like [slug].vue to :slug

            // Exclude the 404, login, and placeholder blog routes
            if (!['/404', '/login', '/blog/:slug'].includes(route)) {
                routes.push(route);
            }
        }
    }

    return routes;
};

const generateSitemap = async () => {
    try {
        // Fetch static Nuxt application routes from the 'pages' directory
        const staticRoutes = await getNuxtStaticRoutes(PAGES_DIR);

        // Fetch dynamic blog post routes from Ghost API
        const { data } = await axios.get(GHOST_API_URL);
        const blogRoutes = data.posts.map(post => `/blog/${post.slug}`);

        // Combine both static and dynamic routes, ensuring no duplicates
        const routes = Array.from(new Set([...staticRoutes, ...blogRoutes]));

        // Generate XML sitemap
        const urls = routes.map(route => {
            // Ensure route starts with a single '/' and remove trailing slashes for consistency
            const cleanRoute = route.startsWith('/') ? route.replace(/\/$/, '') : `/${route.replace(/\/$/, '')}`;
            // Set changefreq and priority based on the route
            let changefreq = 'daily';
            let priority = '0.5';

            if (cleanRoute === '/') {
                priority = '1.0';
                changefreq = 'daily';
            } else if (cleanRoute === '/blog') {
                priority = '0.8';
                changefreq = 'daily';
            } else if (cleanRoute.startsWith('/blog/')) {
                priority = '0.6';
                changefreq = 'never';
            }

            return `
        <url>
          <loc>${BASE_URL}${cleanRoute}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>`;
        }).join('');

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
              xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
              xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        <url>
          <loc>${BASE_URL}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
        ${urls}
      </urlset>`;

        // Calculate hash of the new sitemap content
        const newSitemapHash = crypto.createHash('md5').update(sitemap).digest('hex');

        // Check if the existing sitemap file exists
        let existingSitemapHash = null;
        try {
            const existingSitemap = await fs.readFile(SITEMAP_PATH, 'utf-8');
            existingSitemapHash = crypto.createHash('md5').update(existingSitemap).digest('hex');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }

        // Write sitemap only if it has changed
        if (newSitemapHash !== existingSitemapHash) {
            await fs.writeFile(SITEMAP_PATH, sitemap);
            console.log('Sitemap generated successfully!');
        } else {
            console.log('Sitemap has not changed. No update necessary.');
        }
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
};

// Call the function to generate the sitemap
generateSitemap();