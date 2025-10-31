'use client'
import './styles.scss'

import WithNavbarAndFooter from '@/HOC/WithNavbarAndFooter'

import PostBLog from './components/postBlog'

export default function BlogId() {
  return (
    <main className="blog_content">
      <WithNavbarAndFooter>
        <div className="content">
          <PostBLog />
          {/*           <div className="post_blog_list">
            {Array(2)
              .fill("")
              .map((blog, index) => {
                return <PostBLog key={index} />;
              })}
          </div> */}
        </div>
      </WithNavbarAndFooter>
    </main>
  )
}
