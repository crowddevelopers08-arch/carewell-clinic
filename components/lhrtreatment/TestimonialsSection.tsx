"use client";

import { useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { scrollToContact } from "./scrollToContact";
import { cormorant, inter } from "./fonts";
const reviews = [
  {
    id: "disha",
    name: "Disha Sheregar",
    detail: "5 months ago",
    profile: "104404782660005836072",
    quote: "He were very patient, listened carefully to my concerns, and explained everything in a clear and simple way. The treatment they suggested has been effective . I would definitely recommend them to anyone looking for reliable skin care advice and treatment",
  },
  {
    id: "tusharika",
    name: "Tusharika Handaa",
    detail: "6 months ago",
    profile: "108097435927030282563",
    quote: "My experience with this clinic has been very good. I had taken a full body laser hair reduction package, from which I got very good results in just 3-4 sessions and the staff doctors are also very good. I got proper satisfaction after getting this treatment done.",
  },
  {
    id: "jahid",
    name: "jahid husain",
    detail: "4 months ago",
    profile: "112556874771642528575",
    quote: "Got laser beard shaping at carewell clinic came from bhiwandi.the results have been amazing the beard shape looks very clean and natural the hair growth has reduced a lot after the sessions very happy with the treatment and service.highly recommend",
  },
  {
    id: "bhagesh",
    name: "Bhagesh Eaty",
    detail: "5 months ago",
    profile: "117500547020315338649",
    quote: 'Best experience with this clinic and specially with "DR manjrekar sir" they understand my skin problem and suggest me the best product and that actually works on my skin smoothly and only in 3 - 4 months I was taking care as per guidence of Dr and now my skin problem has be cleared.\nI strongly suggest if anyone have related to skin or hair problem you must visit to "CAREWELL CLINIC" you will also experience a best result',
  },
  {
    id: "samiksha",
    name: "Samiksha Pawar",
    detail: "11 months ago",
    profile: "108657788891676718539",
    quote: "I highly recommend Dr. Dinesh. I visited him for a skin and piercing infection, and within just a week, I noticed visible improvement \u2014 the infection has now completely healed. I also took his consultation for skin and hair concerns, and have seen noticeable results in my hair strength and reduction in skin pigmentation.",
  },
  {
    id: "sagar",
    name: "Sagar Jadhav",
    detail: "7 months ago",
    profile: "114104559491617684350",
    quote: "Best Skin Doctor I have ever came across, I took treatment for skin pigmentation and I am really happy with the initial results.",
  },
  {
    id: "megha",
    name: "MEGHA S",
    detail: "7 months ago",
    profile: "106500895067689024688",
    quote: "I'm really happy with the result , I was dealing with acne for 5 years and nothing worked, i met dr dinesh and he changed my skin completely now it has gotten so much clearer absolutely recommend place.",
  },
] as const;

type Review = (typeof reviews)[number];
type StarRating = 1 | 2 | 3 | 4 | 5;
type TestimonialsSectionProps = {
  avatars?: Partial<Record<Review["id"], string>>;
  ratings?: Partial<Record<Review["id"], StarRating>>;
};

function GoogleReviewRating({ review, rating }: { review: Review; rating: StarRating }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <span className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, index) => <Star key={index} className={`h-4 w-4 fill-current ${index < rating ? "text-[#fbbc04]" : "text-[#dadce0]"}`} strokeWidth={0} aria-hidden="true" />)}
      </span>
      <a href={`https://www.google.com/maps/contrib/${review.profile}/reviews?hl=en-IN`} target="_blank" rel="noopener noreferrer" aria-label={`View ${review.name}'s reviews on Google`} className="shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b]">
        <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65Z" />
          <path fill="#FBBC05" d="M10.53 28.59A14.41 14.41 0 0 1 9.75 24c0-1.59.27-3.13.78-4.59l-7.98-6.19A23.87 23.87 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19Z" />
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
        </svg>
      </a>
    </div>
  );
}

function Reviewer({ review, src }: { review: Review; src?: string }) {
  const initials = review.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div className="flex min-w-0 items-center gap-[13px]">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="h-[30px] w-[30px] shrink-0 rounded-full object-cover" src={src} alt="" width={30} height={30} loading="lazy" />
      ) : (
        <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#c6a03b]/15 text-[11px] font-semibold text-[#171717]" aria-hidden="true">{initials}</span>
      )}
      <div className="min-w-0">
        <a className="text-[13px] font-medium leading-relaxed text-[#171717] hover:text-[#c6a03b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] lg:text-[14px]" href={`https://www.google.com/maps/contrib/${review.profile}/reviews?hl=en-IN`} target="_blank" rel="noopener noreferrer">{review.name}</a>
        <p className="m-0 text-[12px] leading-[17px] text-[#171717]/55">{review.detail}</p>
      </div>
    </div>
  );
}

function ReviewQuote({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const quoteId = useId();
  return (
    <div>
      <blockquote id={quoteId} className={`m-0 whitespace-pre-line text-[14px] font-normal leading-[1.6] sm:text-[15px] ${expanded ? "" : "line-clamp-4"}`}>
        {review.quote}
      </blockquote>
      <button type="button" aria-expanded={expanded} aria-controls={quoteId} aria-label={`${expanded ? "Collapse" : "Read full"} review by ${review.name}`} onClick={() => setExpanded((value) => !value)} className="mt-2 cursor-pointer text-[12px] font-medium text-[#927421] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b]">
        {expanded ? "Show less" : "Read full review"}
      </button>
    </div>
  );
}

export default function TestimonialsSection({ avatars = {}, ratings = {} }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const carouselId = useId();
  const visibleReviews = Array.from({ length: 5 }, (_, offset) => reviews[(activeIndex + offset) % reviews.length]);
  const featuredReview = visibleReviews[0];
  const moveCarousel = (direction: number) => setActiveIndex((current) => (current + direction + reviews.length) % reviews.length);
  return (
    <section id="reviews" className={`${inter.className} scroll-mt-20 bg-white px-4 py-6 text-[#171717] sm:px-6 sm:py-8 lg:py-10`} aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-[1272px]">
        <p className="mb-2 text-[12px] font-semibold tracking-[0.16em] text-[#927421] sm:text-[13px]">PATIENT TESTIMONIALS</p>
        <h2 id="testimonials-heading" className={`${cormorant.className} mb-5 max-w-[1000px] text-[30px] font-semibold leading-[1.15] text-[#171717] sm:text-[38px] md:text-[48px] lg:text-[64px] lg:leading-[1.12] sm:mb-6 lg:mb-7`}>
          Hear It From Those Who&apos;ve <span className="text-[#c6a03b]">Experienced LHR.</span>
        </h2>
        <div id={carouselId} role="region" aria-roledescription="carousel" aria-label="Patient reviews" className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <article
            key={featuredReview.id}
            onTouchStart={(event) => {
              if ((event.target as HTMLElement).closest("a, button")) return;
              const touch = event.touches[0];
              touchStart.current = { x: touch.clientX, y: touch.clientY };
            }}
            onTouchEnd={(event) => {
              const start = touchStart.current;
              touchStart.current = null;
              if (!start) return;
              const touch = event.changedTouches[0];
              const dx = touch.clientX - start.x;
              const dy = touch.clientY - start.y;
              if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
                moveCarousel(dx < 0 ? 1 : -1);
              }
            }}
            onTouchCancel={() => { touchStart.current = null; }}
            className="flex min-w-0 flex-col rounded-[18px] border border-[#171717]/10 bg-linear-to-b from-white to-[#c6a03b]/10 p-4 sm:col-span-2 sm:p-5 lg:row-span-2 lg:p-6"
          >
            <GoogleReviewRating review={featuredReview} rating={ratings[featuredReview.id] ?? 5} />
            <svg className="mb-3 h-7 w-7 shrink-0 text-[#c6a03b]/40 sm:h-8 sm:w-8" width="34" height="36" viewBox="0 0 34 36" fill="currentColor" aria-hidden="true">
              <path d="M4 34 5 11C5 6 7 3 11 3c4 0 6 3 5 7-1 4-4 8-7 13L7 34H4Zm17 0 1-23c0-5 2-8 6-8s6 3 5 7c-1 4-4 8-7 13l-2 11h-3Z" />
            </svg>
            <div className="sm:hidden">
              <ReviewQuote review={featuredReview} />
            </div>
            <blockquote className="m-0 hidden whitespace-pre-line text-[14px] font-normal leading-relaxed sm:block sm:text-[15px] md:text-[16px] lg:text-[17px] [&_em]:text-[#c6a03b]">
              {featuredReview.quote}
            </blockquote>
            <footer className="mt-auto flex items-center pt-5 sm:pt-6">
              <Reviewer review={featuredReview} src={avatars[featuredReview.id]} />
            </footer>
          </article>
          {visibleReviews.slice(1).map((review) => (
            <article className="hidden min-w-0 flex-col justify-between gap-4 rounded-[18px] border border-[#171717]/10 bg-white p-4 sm:flex lg:p-5" key={review.id}>
              <div>
                <GoogleReviewRating review={review} rating={ratings[review.id] ?? 5} />
                <ReviewQuote review={review} />
              </div>
              <footer>
                <Reviewer review={review} src={avatars[review.id]} />
              </footer>
            </article>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 sm:mt-4 sm:gap-3">
          <button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous reviews" aria-controls={carouselId} className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#c6a03b]/35 text-[#171717] transition-colors hover:bg-[#c6a03b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="flex sm:gap-1" aria-label="Choose featured review">
            {reviews.map((review, index) => (
              <button key={review.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`Feature review by ${review.name}`} aria-current={activeIndex === index ? "true" : undefined} aria-controls={carouselId} className="flex h-11 w-5 cursor-pointer sm:w-6 items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-[#c6a03b]">
                <span className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-5 bg-[#c6a03b]" : "w-2 bg-[#171717]/20"}`} />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => moveCarousel(1)} aria-label="Next reviews" aria-controls={carouselId} className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#c6a03b]/35 text-[#171717] transition-colors hover:bg-[#c6a03b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b]">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <p className="sr-only" aria-live="polite" aria-atomic="true">Featured review {activeIndex + 1} of {reviews.length}: {featuredReview.name}</p>
        </div>
        <div className="mt-4 flex justify-center sm:mt-5">
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-full bg-[#c6a03b] sm:w-auto py-2.5 pl-6 pr-2.5 text-[13px] font-medium tracking-[0.03em] text-white shadow-sm transition-colors hover:bg-[#dd7900] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6a03b] sm:text-sm"
          >
            Start Your LHR Journey
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171717]">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
