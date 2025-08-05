import { cn } from "@/lib/utils";
import Image from "next/image";

interface DisplayCardProps {
  title: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
}

export function DisplayCard({ title, description, imageUrl, featured = false }: DisplayCardProps) {
  return (
    <div 
      className={cn(
        "shadow-md hover:shadow-lg hover:scale-110 focus:scale-110 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 p-1 mb-2 cursor-pointer",
        featured && "shadow-xl scale-105 mb-3"
      )}
      tabIndex={0}
      role="button"
      aria-label={`${featured ? 'Featured card: ' : ''}${title}. ${description}`}
    >
      <div className={cn(
        "bg-black h-full",
        featured && "bg-gradient-to-br from-blue-50 to-purple-50"
      )}>
        <div className={cn(
          "relative w-full",
          featured ? "h-64" : "h-48"
        )}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
          {featured && (
            <div className="absolute top-0 right-0 bg-gradient-to-r to-blue-500 from-purple-600 text-gray-200 px-5 py-1 text-3xl">
              🛰️
            </div>
          )}
        </div>
        <div className={cn(
          "p-4",
          featured && "p-6 bg-black"
        )}>
          <h3 className={cn(
            "font-semibold text-gray-200 font-mono mb-2 border-1 border-dashed p-2",
            featured ? "text-xl" : "text-lg"
          )}>{title}</h3>
          <p className={cn(
            "text-gray-100 leading-relaxed py-2",
            featured ? "text-base" : "text-sm"
          )}>{description}</p>
        </div>
      </div>
    </div>
  );
}