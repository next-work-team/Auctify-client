import Link from 'next/link';
import {
  Laptop,
  Shirt,
  Trophy,
  Palette,
  Car,
  Watch,
  Dumbbell,
  Sofa,
  Book,
  Music,
  Landmark,
  MoreHorizontal,
} from 'lucide-react';

import { Card, CardContent } from '@/shared/ui/Card';

interface CategoryCardProps {
  title: string;
  icon: string;
  count: number;
  slug?: string;
}

export default function CategoryCard({
  title,
  icon,
  count,
  slug,
}: CategoryCardProps) {
  const getIcon = () => {
    const className = 'h-8 w-8 mb-2';

    switch (icon) {
      case 'laptop':
        return <Laptop className={className} />;
      case 'shirt':
        return <Shirt className={className} />;
      case 'trophy':
        return <Trophy className={className} />;
      case 'palette':
        return <Palette className={className} />;
      case 'car':
        return <Car className={className} />;
      case 'watch':
        return <Watch className={className} />;
      case 'dumbbell':
        return <Dumbbell className={className} />;
      case 'sofa':
        return <Sofa className={className} />;
      case 'book':
        return <Book className={className} />;
      case 'music':
        return <Music className={className} />;
      case 'landmark':
        return <Landmark className={className} />;
      case 'more-horizontal':
        return <MoreHorizontal className={className} />;
      default:
        return <MoreHorizontal className={className} />;
    }
  };

  return (
    <Card className="overflow-hidden hover:border-primary transition-colors cursor-pointer">
      <Link href={`/categories/${slug || icon}`}>
        <CardContent className="p-6 flex flex-col items-center text-center">
          {getIcon()}
          <h3 className="font-medium">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{count}개 상품</p>
        </CardContent>
      </Link>
    </Card>
  );
}
