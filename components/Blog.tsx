import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const blogPosts = [
  {
    category: "Category",
    date: "November 22, 2021",
    title: "Pitch termsheet backing validation focus release.",
    author: "Chandler Bing",
    avatar: "/images/chandler-bing.png", // Replace with actual path
    image: "/images/blog1.png", // Replace with actual path
  },
  {
    category: "Category",
    date: "November 22, 2021",
    title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    author: "Rachel Green",
    avatar: "/images/rachel-green.png", // Replace with actual path
    image: "/images/blog2.png", // Replace with actual path
  },
  {
    category: "Category",
    date: "November 22, 2021",
    title: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    author: "Monica Geller",
    avatar: "/images/monica-geller.png", // Replace with actual path
    image: "/images/blog3.png", // Replace with actual path
  },
]

export default function Blog() {
  return (
    <section className="py-[40px]">
      <div className="container mx-auto px-14">
        <div className="text-center mb-[80px]">
          <p className="text-xl leading-[32px] text-sonic-silver mb-3">Our Blog</p>
          <h2 className="text-5xl text-black font-normal leading-[72px] max-w-[840px] mx-auto">
            Value proposition accelerator product management venture
          </h2>
        </div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-3 gap-x-[50px] mb-[84px]">
          {blogPosts.map((post, index) => (
            <Link href="#" key={index} className="group flex flex-col h-full">
              <div className="mb-6 overflow-hidden rounded-3xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={209}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="mb-5">
                  <span className="text-base leading-7 font-bold text-oxford-blue mr-3">{post.category}</span>
                  <span className="text-base text-sonic-silver leading-7">{post.date}</span>
                </div>
                <h3 className="text-xl font-normal text-black leading-8 mb-5 group-hover:text-oxford-blue transition-colors flex-grow">
                  {post.title}
                </h3>
                <div className="flex items-center space-x-3 mt-auto">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.avatar} alt={post.author}/>
                    <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <p className="text-base text-black">{post.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="rounded-[56px] text-oxford-blue border-2 border-oxford-blue px-14 py-8 text-xl font-bold hover:bg-oxford-blue hover:text-white transition-colors"
          >
            Load more
          </Button>
        </div>
      </div>
    </section>
  )
}