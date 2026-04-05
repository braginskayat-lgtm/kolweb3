import Link from 'next/link';
import { BlogPost } from '@/lib/blog/types';
import { Badge } from '@/components/ui/Badge';

interface Props {
  post: BlogPost;
}

export function ArticleLayout({ post }: Props) {
  return (
    <div className='relative pt-24 pb-24'>
      <div className='absolute inset-0 h-96 bg-gradient-hero pointer-events-none' />
      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16'>
        <nav className='flex items-center gap-2 text-sm text-gray-500 mb-8'>
          <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
          <span>/</span>
          <Link href='/blog' className='hover:text-primary transition-colors'>Blog</Link>
          <span>/</span>
          <span className='text-gray-400'>{post.category}</span>
        </nav>
        <div className='flex items-center gap-3 mb-6'>
          <Badge variant='blue'>{post.category}</Badge>
          <span className='text-sm text-gray-500'>{post.date}</span>
          <span className='text-gray-600'>·</span>
          <span className='text-sm text-gray-500'>{post.readTime}</span>
        </div>
        <h1 className='text-4xl sm:text-5xl font-bold text-white leading-tight mb-6'>{post.title}</h1>
        <p className='text-xl text-gray-400 leading-relaxed mb-8'>{post.excerpt}</p>
      </div>
      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <article>
          {post.content.map((section) => (
            <section key={section.id} id={section.id} className='mb-12 scroll-mt-28'>
              <h2 className='text-2xl sm:text-3xl font-bold text-white mb-6 pb-4 border-b border-white/10'>{section.heading}</h2>
              <div
                className='prose prose-invert prose-gray max-w-none prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-h3:text-white prose-h3:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-strong:text-white prose-a:text-primary'
                dangerouslySetInnerHTML={{ __html: section.body }}
              />
            </section>
          ))}
          <div className='mt-16 glass-card p-8 border border-primary/20'>
            <h3 className='text-2xl font-bold text-white mb-3'>Ready to grow your crypto project?</h3>
            <p className='text-gray-400 mb-6'>We have managed 3.1M+ in crypto marketing budgets.</p>
            <Link href='/contact' className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity'>
              Get a Free Proposal
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}