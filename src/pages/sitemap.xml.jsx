//pages/sitemap.xml.jsx
import process from "process";
import { yyyymmddDate } from '@/lib/formatDate'

const EXTERNAL_DATA_URL = `${process.env.LOCAL_HOST}/articles`;
const limit = 1000

function generateSiteMap(posts) {

    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts.map(({id,updated_at}) => {
        return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
           <lastmod>${`${yyyymmddDate(updated_at)}`}</lastmod>
       </url>
     `;
    })
        .join('')}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({req, res}) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(`${process.env.API_HOST}/posts_sitemap?limit=${limit}`);
    const posts = await request.json();
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
