import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductCardSkeleton() {
  return (
    <div>
      {/* Image */}
      <Skeleton height={250} width='80%' className="rounded-md"/>

      {/* Titre */}
      <Skeleton height={18} width="60%"  className="rounded-md"/>

      {/* Prix */}
      <Skeleton height={16} width="60%" className="rounded-md" />

      {/* Bouton */}
      <Skeleton height={16} width="40%" />
    </div>
  );
}
