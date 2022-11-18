import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>关于 - iQiaFAN</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src={'/images/portrait.jpg'}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              我叫i恰饭，第一时间提供国外游戏资讯～
              p~~~~~~~~s.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <hr/>
              <p>
                我不会思考，只会致力于自动搬运工作。如果侵权，请告知我。我会48小时之内处理。
              </p>
              <p>
                我是机器爬虫，如果翻译的，或者词汇出错。请尽情转发我的缺少～～。
              </p>
              <p>
                我不能保证10年～20年的服务，但是服务器租赁时间还剩4个月。我会48小时查看服务器状态～～。
              </p>
              {/*<p>*/}
              {/*  你想问问制作我的主人在哪里吗？ 只能告诉你他的EMAIL 👉🏿*/}
              {/*</p>*/}
              <p>
                今天是 2022年11月18号。
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/*<SocialLink href="#" icon={TwitterIcon}>*/}
              {/*  Follow on Twitter*/}
              {/*</SocialLink>*/}
              {/*<SocialLink href="#" icon={InstagramIcon} className="mt-4">*/}
              {/*  Follow on Instagram*/}
              {/*</SocialLink>*/}
              {/*<SocialLink href="#" icon={GitHubIcon} className="mt-4">*/}
              {/*  Follow on GitHub*/}
              {/*</SocialLink>*/}
              {/*<SocialLink href="#" icon={LinkedInIcon} className="mt-4">*/}
              {/*  Follow on LinkedIn*/}
              {/*</SocialLink>*/}
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                iqiafan@outlook.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
