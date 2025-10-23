import { cn } from '@/lib/utils';

interface MenuCardProps {
    imageUrl: string;
    title: string;
    description: string;
    isActive: boolean;
}

export default function MenuCard({ imageUrl, title, description, isActive }: MenuCardProps) {
    return (
        <>
            <div className="soft-shadow relative aspect-[1/1] bg-purple-900">
                <img
                    src={imageUrl}
                    alt={title}
                    className={cn('absolute z-10 aspect-[1/1] h-auto w-full object-cover', isActive && 'brightness-50')}
                />

                <div className="0 absolute z-20 flex h-full w-full items-center justify-center py-[20%]">
                    <div className="h-max w-full">
                        <div className="-ml-[10%] flex min-h-full w-[120%] items-center justify-center md:-ml-[15%] md:w-[130%]">
                            {isActive && <h1 className="font-milyuna text-center text-6xl text-black sm:text-7xl md:text-8xl lg:text-9xl">{title}</h1>}
                        </div>
                    </div>
                </div>

                <div className="absolute z-30 flex h-full w-full items-center justify-center py-[20%]">
                    <div className="h-max w-full overflow-hidden">
                        <div className="-ml-[10%] flex min-h-full w-[120%] items-center justify-center md:-ml-[15%] md:w-[130%]">
                            {isActive && <h1 className="font-milyuna text-center text-6xl text-white sm:text-7xl md:text-8xl lg:text-9xl">{title}</h1>}
                        </div>
                    </div>
                </div>
            </div>

            {isActive && (
                <div className="flex flex-col items-center gap-4 py-6 md:flex-row">
                    <p className="font-outfit order-1 w-full text-center text-lg leading-tight font-light tracking-normal text-black md:order-none md:w-[70%] md:text-left md:text-xl">
                        {description}
                    </p>

                    <div className="order-2 flex w-full justify-center md:justify-end md:order-none md:w-[30%]">
                        <button className="font-outfit border-2 border-black bg-transparent px-4 md:px-2 text-xl leading-none font-light tracking-[.05em] whitespace-nowrap text-black transition-colors hover:bg-black hover:text-white md:text-xl md:py-3 py-3">
                            See More
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
