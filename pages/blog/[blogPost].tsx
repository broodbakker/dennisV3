
import Nav from "../../components/nav";
import { Layout } from "../../components/layout"
//typescript
import { PostData } from "../../typescript"

import { importPostSlugs, importPost } from "../../functions/importPosts"

interface IBlogPost {
  blog:PostData
}
const BlogPost = ({blog}: IBlogPost) => {
  return (
    <Layout title={blog.attributes.title}>
      <div className="relative">
        <div className="overlay-background-image bg-blue-100 opacity-25" />
        <Nav />

        <div className="relative pb-16 px-8 mx-auto md:max-w-screen-md pt-32">
          <h1 className="text-4xl text-headerColor text-center mb-4">{blog.attributes.title}</h1>

          <div className="text-base md:text-lg text-fontColor content-center">

            <div className="w-full h-full max-w-2xl m-auto">
              <img
                className="h-full w-full rounded-t"
                src={blog.attributes.image}
              />
            </div>

            <div className="mb-12 text-xl mx-auto"><div className="prose-xl md:prose-2xl mx-auto" dangerouslySetInnerHTML={{ __html: blog.html }}></div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};


export async function getStaticPaths() {
  const slugs = await importPostSlugs()

  const paths = slugs.map((slug: string) => ({
    params: { blogPost: slug.toString() },
  }));

  return { paths, fallback: false };
}


interface IParams {
  params: {
      blogPost: string;
  }
}


// params will contain the id for each generated page.
export async function getStaticProps({ params }: IParams) {
  const slug = `${params.blogPost}.md`

  const post:PostData = await importPost(slug);

  const blog: PostData = JSON.parse(JSON.stringify(post));

  return {
    props: {
      blog
    },
  };
}

export default BlogPost;
