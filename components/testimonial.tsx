import Image, { StaticImageData } from "next/image";

export default function Testimonial({
  testimonial,
  cloned = false,
  className,
  children,
}: {
  testimonial: {
    img: StaticImageData | string;
    name: string;
    username?: string;
    rating?: number;
    videoUrl?: string;
    videoThumb?: StaticImageData;
    channel?: string;
  };
  cloned?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const isSvg =
    typeof testimonial.img === "string" &&
    testimonial.img.trim().startsWith("<svg");

  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] md:odd:-rotate-1 md:even:rotate-1 ${className}`}
    >
      <header className="mb-4 flex items-center gap-3">
        {isSvg ? (
          <div
            className="shrink-0 w-11 h-11" // Size adjustment for SVG
            dangerouslySetInnerHTML={{ __html: testimonial.img as string }}
          />
        ) : (
          <Image
            className="shrink-0 rounded-full"
            src={testimonial.img}
            width={44}
            height={44}
            alt={testimonial.name}
          />
        )}
        <div>
          <div className="font-bold">{testimonial.name}</div>
          {testimonial.username ? (
            <div>
              <a
                className="text-sm font-medium text-gray-500/80 transition hover:text-gray-500"
                href="#0"
                tabIndex={cloned ? -1 : 0}
              >
                {testimonial.username}
              </a>
            </div>
          ) : null}
        </div>
      </header>
      {testimonial.rating ? (
        <div className="mb-3 inline-flex">
          <span className="sr-only">Rating is 5 out of 5</span>
          <div className="relative">
            <svg
              className="fill-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width={114}
              height={18}
            >
              <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
            </svg>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: "100%" }}
            >
              <svg
                className="fill-amber-400"
                xmlns="http://www.w3.org/2000/svg"
                width={114}
                height={18}
              >
                <path d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}
      {testimonial.videoThumb ? (
        <div className="grow">
          <p className="mb-4 font-semibold">{children}</p>
          <a href={testimonial.videoUrl} tabIndex={cloned ? -1 : 0}>
            <Image
              className="w-full"
              src={testimonial.videoThumb}
              width={312}
              height={180}
              alt="View on YouTuobe"
            />
          </a>
        </div>
      ) : (
        <div className="grow text-sm text-gray-700">{children}</div>
      )}
      <footer className="mt-4 flex items-center gap-2.5 text-gray-700">
        <a
          className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6"
          href="#0"
        >
          <span className="text-sm">Learn more</span>
          <svg
            className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 5H0v2h6v4l6-5-6-5z" />
          </svg>
        </a>
      </footer>
    </article>
  );
}
