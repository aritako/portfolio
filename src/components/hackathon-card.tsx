import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  id,
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      {links && id === links.length + 1 &&
        (< div className="absolute -left-[52px] -bottom-2 w-6 h-6 bg-accent rounded-full"></div>)
      }
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {
        links && links.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link.href} key={idx}>
                <Badge key={idx} title={link.title} className="flex gap-2">
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )
      }
    </li >
  );
}
