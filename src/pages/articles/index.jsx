import Head from 'next/head'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import {formatDate} from '@/lib/formatDate'
import InfiniteScroll from 'react-infinite-scroll-component'
import React, {useState} from 'react'
import * as process from "process";

function Article({post}) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                {' '} <Card.Title href={`/articles/${post.title_cn}`}>
                {post.title_cn}
            </Card.Title>{' '} <Card.Eyebrow as="time" dateTime={post.created_at} className="md:hidden" decorate
            >
                {formatDate(post.created_at)}
            </Card.Eyebrow>{' '} <Card.Description>{post.description_cn}</Card.Description>{' '} <Card.Cta>Read article</Card.Cta>{' '}
            </Card>{' '} <Card.Eyebrow as="time" dateTime={post.created_at} className="mt-1 hidden md:block"
        >
            {formatDate(post.created_at)}
        </Card.Eyebrow>
        </article>
    )
}



export default function ArticlesIndex({data,api_server}) {
    const [posts, setPosts] = useState(data)

    const [hasMore, setHasMore] = useState(true)
    const getMorePost = async () => {
        // const res = await fetch(`${api_server}/posts_infinity?start=${posts.length}&limit=10`)
        const newPosts = await getNewPosts(api_server,posts.length)
        setPosts((post) => [...post, ...newPosts])
    }
    return (
        <>
            <Head>
                <title>新闻 - iQiaFAN</title>
                <meta name="description" content="我叫i恰饭，第一时间提供国外游戏资讯～"
                />
            </Head>{' '} <SimpleLayout title="支持夜间模式哦～👻" intro="美式一杯，幸福美满☕,（我也想喝）"
        >
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                {/* <div className="flex max-w-3xl flex-col space-y-16"> */} <InfiniteScroll dataLength={posts.length} next={getMorePost} hasMore={hasMore} loader={<h3></h3>} endMessage={
                <h4>Nothing more to show</h4>} className="flex max-w-3xl flex-col space-y-16" style={{overflow: 'visible'}}
            >
                {posts.map((post,i) => (
                    <Article key={i} post={post} />
                ))}
            </InfiniteScroll> {/* </div> */}
            </div>
        </SimpleLayout>
        </>
    )
}

export async function getNewPosts(api_server,length) {
    const res = await fetch(`${api_server}/posts_infinity?start=${length}&limit=10`);
    const data = await res.json();
    return data;
}

export async function getPosts() {
    const res = await fetch(`${process.env.API_HOST}/posts_infinity?limit=10`);
    const data = await res.json()
    return data;
}

export async function getStaticProps() {
    const data = await getPosts()
    return {
        props: {
            data,
            api_server: process.env.API_HOST,
        },
    }
}
