<template>
  <Head>
    <Title>{{ post?.title || 'Post' }}</Title>
  </Head>
  <section class="gh-blog-container">
    <div class="gh-blog">
      <div class="gh-main gh-outer">
        <div class="gh-inner">
          <article class="gh-article post">
            <header class="gh-article-header gh-canvas">
              <h1 class="text-light" v-if="post">{{ post.title }}</h1>
              <!-- Date under the heading -->
              <p v-if="post" class="text-gray-500 text-sm mt-2">
                {{ new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
              </p>
            </header>

            <!-- Blog Content -->
            <section class="gh-content gh-canvas" v-if="post">
              <div v-html="post.html"></div>
            </section>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAsyncData, useRoute } from '#app';

const route = useRoute();
const slug = route.params.slug;

// Fetch the current post data
const GHOST_API_URL = `https://ghost.weed-garden.com/ghost/api/v3/content/posts/slug/${slug}/?key=1e3deb58b040964cfa7d845781&fields=title,slug,custom_excerpt,feature_image,reading_time,published_at,meta_title,meta_description&formats=html`;

const { data: post, error } = await useAsyncData(`post-${slug}`, async () => {
  const response = await $fetch(GHOST_API_URL);
  return response.posts[0];  // Return the first post that matches the slug
});

watchEffect(() => {
  if (post.value) {
    useHead({
      title: post.value.title || 'Post',
      meta: [
        { name: 'description', content: post.value.meta_description || post.value.custom_excerpt },
      ]
    });
  }
});
</script>
<style>

.breadcrumbs {
  font-size: 0.875rem;
  color: #888;
}

.breadcrumbs a {
  text-decoration: none;
  color: inherit;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}

/* Styling for forward/backward navigation */
.post-navigation a {
  font-weight: 600;
  text-decoration: none;
}

.post-navigation a:hover {
  text-decoration: underline;
}

/* Center the article content and set a max width */
.gh-blog-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.gh-blog-container .gh-blog {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%; /* Ensure the blog content takes full width until max-width is reached */
}

.gh-blog-container .gh-main {
  margin: 0 auto;
}

/* Headings */
.gh-blog-container h1,
.gh-blog-container h2,
.gh-blog-container h3,
.gh-blog-container h4,
.gh-blog-container h5,
.gh-blog-container h6 {
  font-family: Georgia, serif;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #FFFFF0;
  line-height: 1.2;
}

.gh-blog-container h1 {
  font-size: 3.2rem;
}

.gh-blog-container h2 {
  font-size: 2.8rem;
}

.gh-blog-container h3 {
  font-size: 2.4rem;
}

.gh-blog-container h4 {
  font-size: 2rem;
}

.gh-blog-container h5 {
  font-size: 1.8rem;
}

.gh-blog-container h6 {
  font-size: 1.6rem;
}

/* Paragraphs */
.gh-blog-container p {
  margin-bottom: 1.6rem;
  line-height: 1.8;
}

/* Links */
.gh-blog-container a {
  color: #0cb07e;
  text-decoration: none;
}

.gh-blog-container a:hover {
  text-decoration: underline;
}

/* Lists */
.gh-blog-container ul,
.gh-blog-container ol {
  margin-left: 2rem;
  margin-bottom: 1.6rem;
}

.gh-blog-container ul {
  list-style-type: disc;
}

.gh-blog-container ul li,
.gh-blog-container ol li {
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
}

.gh-blog-container ol {
  list-style: none; /* Remove the default bullets */
  margin-left: 2rem; /* Add left padding for bullets */
}

.gh-blog-container ol li {
  position: relative;
  margin-bottom: 1rem;
  padding-left: 1rem; /* Space for custom bullet */
}

.gh-blog-container ol li::before {
  content: '•'; /* You can use a custom character like a bullet or emoji */
  color: #0cb07e; /* Customize the bullet color */
  font-size: 4rem; /* Customize the bullet size */
  position: absolute;
  left: -20px;
  top: -20px;
}

/* Blockquotes */
.gh-blog-container blockquote {
  border-left: 4px solid #0cb07e;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: #444;
}

/* Code */
.gh-blog-container code {
  background-color: #f6f6f6;
  border-radius: 4px;
  padding: 0.2rem 0.4rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.4rem;
  color: #d6336c;
}

.gh-blog-container pre {
  background-color: #f6f6f6;
  padding: 1.5rem;
  border-radius: 4px;
  overflow-x: auto;
}

/* Images */
.gh-blog-container img {
  max-width: 100%;
  height: auto;
  margin: 2rem 0;
}

/* Figures and Captions */
.gh-blog-container figure {
  margin: 2rem 0;
  text-align: center;
}

.gh-blog-container figcaption {
  font-size: 1.4rem;
  color: #999;
  margin-top: 0.8rem;
}

.gh-blog-container p {
  font-size: 1.6rem;
}

</style>
