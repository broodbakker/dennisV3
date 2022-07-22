import { BlogPost } from "./blogPost"
//typescript
import { PostData } from "../typescript"
//constants
import {NUMBER_POST_FRONTPAGE} from "../util/constants"

type BlogPostsProps = {
  blogPosts: PostData[]
}

export const BlogPosts = ({ blogPosts }: BlogPostsProps) => {
  return (<>
    <div className="relative p-6 shadow-offsetHover" >
      <div className="absolute w-full h-full inset-0 opacity-75 rounded-lg bg-color3" />

      <h2 className="relative text-white text-2xl md:text-3xl mb-4">
        Lees even mijn laatste blog posts!
    </h2>
      <article className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto ">
        {blogPosts.map((blogPost: any, index: number) => {
          if (index < NUMBER_POST_FRONTPAGE) return <BlogPost blogPost={blogPost} key={index} />
        })}
      </article>
    </div>
  </>)
}



