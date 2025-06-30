/**
 * SEO utility for setting page metadata dynamically
 */
export function setSEO(title: string, description: string, keywords: string) {
  // Set document title
  if (typeof document !== "undefined") {
    document.title = title

    // Update meta tags
    const metaTags = {
      description,
      keywords,
      "og:title": title,
      "og:description": description,
      "og:type": "website",
      "og:url": "https://voxme.live",
      "og:image": "https://voxme.live/og-image.jpg",
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": "https://voxme.live/twitter-image.jpg",
      robots: "index, follow",
      author: "Voxme.live",
      "theme-color": "#61dafb",
    }

    // Update meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`)

      if (!meta) {
        meta = document.createElement("meta")
        if (name.startsWith("og:") || name.startsWith("twitter:")) {
          meta.setAttribute("property", name)
        } else {
          meta.setAttribute("name", name)
        }
        document.head.appendChild(meta)
      }

      meta.setAttribute("content", content)
    })
  }
}
