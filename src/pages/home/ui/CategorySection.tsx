import { CategoryCard } from '@/entities/category';

export default function CategorySection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            카테고리
          </h2>
          <p className="text-muted-foreground">
            관심 있는 카테고리를 탐색해보세요
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <CategoryCard title="전자기기" icon="laptop" count={245} />
          <CategoryCard title="패션" icon="shirt" count={189} />
          <CategoryCard title="수집품" icon="trophy" count={156} />
          <CategoryCard title="예술작품" icon="palette" count={112} />
          <CategoryCard title="자동차" icon="car" count={78} />
          <CategoryCard title="보석/시계" icon="watch" count={134} />
          <CategoryCard title="스포츠" icon="dumbbell" count={95} />
          <CategoryCard title="가구/인테리어" icon="sofa" count={167} />
          <CategoryCard title="도서" icon="book" count={203} />
          <CategoryCard title="음악/악기" icon="music" count={87} />
          <CategoryCard title="골동품" icon="landmark" count={64} />
          <CategoryCard title="기타" icon="more-horizontal" count={219} />
        </div>
      </div>
    </section>
  );
}
