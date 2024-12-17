import type { IBlog } from "../types/blog";

interface BlogCardProps {
  blog: IBlog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="max-w-[960px] w-[100%] flex flex-col items-center border-blue-500 border-2 rounded-2xl p-[8px]">
      <img
        className="w-[300px] h-[300px] mb-3 object-contain"
        src={`http://127.0.0.1:1337${blog.image[0]?.url}`}
        alt=""
      />
      <div className="flex items-center justify-center w-[100%]">
        <h3 className="text-lg font-semibold mb-3">{blog.title}</h3>
      </div>
      <a
        className="border p-2 bg-blue-400 w-[100%] text-center"
        href={`/blogs/${blog.id}`}
      >
        Blog details
      </a>
    </div>
  );
};

export default BlogCard;
