import Link from 'next/link';

interface PlatformCardProps {
  name: string;
  icon: string;
  slug: string;
  color?: string;
}

export default function PlatformCard({ name, icon, slug, color = 'bg-gray-100' }: PlatformCardProps) {
  return (
    <Link href={`/${slug}-downloader`}>
      <div className="card hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="flex flex-col items-center text-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${color}`}>
            {icon}
          </div>
          <h3 className="mt-3 font-semibold">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">Download videos</p>
        </div>
      </div>
    </Link>
  );
}