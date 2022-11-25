import {useRouter} from "next/router";
import { ArticleLayout } from '@/components/ArticleLayout'

export default function Home(props){
    const meta = {
        author: props.post.author,
        date: props.post.created_at,
        title: props.post.title_cn,
        description: props.post.description_cn,
    }
    return(
        <ArticleLayout meta={meta} {...props} />
    );
}

export async function getPostsPaths(){
    const res = await fetch(`${process.env.API_HOST}/posts_paths`)
    const data = await res.json()
    return data
}

export async function getStaticPaths(){
    const posts = await getPostsPaths()
    const paths = posts.map((post)=>({
        params: {
            title: post.title_en.toString(),
            id: post.id.toString(),
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getPost(id){
    const res = await fetch(`${process.env.API_HOST}/posts/${id}`)
    const data = await res.json()
    return data
}

export async function getStaticProps({params}) {
    const paths = await getStaticPaths();
    let id = 0;
    paths.paths.map((path)=>{
        if(path.params.title == params.title){
            id = path.params.id;
        }
    })
    const post = await getPost(id)
    return {
        props: {
            post,
        },
    }
}
