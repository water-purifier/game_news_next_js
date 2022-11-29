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


export async function getPost(id){
    const res = await fetch(`${process.env.API_HOST}/posts/${id}`)
    const data = await res.json()
    return data
}

export async function getServerSideProps({req, params}) {
    const id = params.id;
    const post = await getPost(id)
    return {
        props: {
            post,
        },
    }
}
