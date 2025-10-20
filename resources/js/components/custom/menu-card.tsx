import { cn } from '@/lib/utils';

interface MenuCardProps {
    imageUrl: string;
    title: string;
    description: string;
    isActive: boolean;
}

export default function MenuCard({ imageUrl, title, description, isActive }: MenuCardProps) {
    return (
        <div className="relative aspect-[1/1] bg-purple-900">
            <img src={imageUrl} alt={title} className={cn('absolute z-10 aspect-[1/1] h-auto w-full object-cover', isActive && 'brightness-50')} />

            <div className="0 absolute z-20 flex h-full w-full items-center justify-center py-[20%]">
                <div className="h-max w-full">
                    <div className="-ml-[10%] flex min-h-full w-[120%] items-center justify-center md:-ml-[15%] md:w-[130%]">
                        {isActive && <h1 className="font-cormorant text-center text-6xl text-black sm:text-7xl md:text-7xl">{title}</h1>}
                    </div>
                </div>
            </div>

            <div className="absolute z-30 flex h-full w-full items-center justify-center py-[20%]">
                <div className="h-max w-full overflow-hidden">
                    <div className="-ml-[10%] flex min-h-full w-[120%] items-center justify-center md:-ml-[15%] md:w-[130%]">
                        {isActive && <h1 className="font-cormorant text-center text-6xl text-white sm:text-7xl md:text-7xl">{title}</h1>}
                    </div>
                </div>
            </div>
        </div>
    );
}
