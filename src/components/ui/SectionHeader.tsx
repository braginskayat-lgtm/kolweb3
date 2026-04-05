import { AnimatedSection } from './AnimatedSection';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  center?: boolean;
}

export function SectionHeader({ badge, title, titleHighlight, description, center = true }: SectionHeaderProps) {
  return (
    <AnimatedSection className={center ? 'text-center' : ''}>
      {badge && (
        <div className={`flex mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {badge}
          </span>
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-4 ${center ? 'max-w-2xl mx-auto' : ''}`}>
        {title}{' '}
        {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
      </h2>
      {description && (
        <p className={`text-gray-400 text-lg ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
