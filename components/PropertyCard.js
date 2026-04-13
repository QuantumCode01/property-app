import Link from "next/link";
import Image from "next/image";

export default function PropertyCard({ property }) {
  return (
    <div className="card shadow-sm">
      <Image
        src={property.images?.[0]}
        alt={property.name}
        width={400}
        height={250}
        priority
      />
    <div className="p-4 flex flex-col gap-2">
     <h2 >{property.name}</h2>
      <p>📍 {property.location}</p>
      <p>⭐ {property.rating} ({property.reviews})</p>
      <h4>Rs {property.price} / {property.per}</h4>
        <Link  className="border rounded-[4px]  p-2 w-50 margin-auto text-center" href={`/property/${property.id}`}>
        View Details →
      </Link>
    </div>
     
    
    </div>
  );
}