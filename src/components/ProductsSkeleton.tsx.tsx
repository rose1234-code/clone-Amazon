import ProductCardSkeleton from "./ProductCArdSkeleton";

export default function ProductsSkeleton() {
  return (
    <div className="grid  grid-cols-4 gap-4  w-[1450px]">
      {Array.from({ length:8 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
