import Image from "next/image";

const photos = [
  {
    src: "/images/tv-unit-and-hall.jpeg",
    alt: "Hall area with custom TV unit and clean layout",
  },
  {
    src: "/images/entrance.jpeg",
    alt: "Apartment entrance and hallway view",
  },
  {
    src: "/images/kitchen.jpeg",
    alt: "Modular kitchen with overhead cabinets",
  },
  {
    src: "/images/bedroom-1.jpeg",
    alt: "Bedroom with built-in wardrobe finish",
  },
  {
    src: "/images/bedroom-2.jpeg",
    alt: "Second bedroom wardrobe and storage",
  },
  {
    src: "/images/entrance-door.jpeg",
    alt: "Main entrance door",
  },
] as const;

const highlights = [
  "Asking price: Rs 42 lakh",
  "Current rental yield: Rs 18,500 per month including maintenance",
  "Approximate combined annual return: 8%",
  "Super built-up area: 675 sq ft",
  "2 scooter parking available",
  "5 minutes from nearby bus stop",
  "2 km to upcoming Pink Line Cantonment metro station",
  "30 minutes to MG Road and Manyata Tech Park",
  "10 minutes to RT Nagar",
] as const;

const faqItems = [
  {
    question: "What is the expected return profile for this property?",
    answer:
      "With current rental of Rs 18,500 per month including maintenance and expected property appreciation, the estimated combined annual return is around 8%.",
  },
  {
    question: "What is the exact pricing and rental status?",
    answer:
      "The apartment is listed at Rs 42 lakh and is currently generating Rs 18,500 monthly rent including maintenance.",
  },
  {
    question: "How is the location for commute and daily access?",
    answer:
      "The home is in JC Nagar, Bengaluru, around 5 minutes from a bus stop, 10 minutes from RT Nagar, and approximately 30 minutes from MG Road and Manyata Tech Park.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, parking for 2 scooters is available.",
  },
] as const;

const contactNumber = "9620221991";
const phoneHref = `tel:+91${contactNumber}`;
const whatsappHref = `https://wa.me/91${contactNumber}?text=Hi%2C%20I%20am%20interested%20in%20the%20JC%20Nagar%20apartment%20for%20sale.`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Apartment for sale in JC Nagar, Bengaluru",
  description:
    "Apartment available for Rs 42 lakh in JC Nagar, Bengaluru with 675 sq ft super built-up area and current rental yield of Rs 18,500 per month including maintenance.",
  price: "4200000",
  priceCurrency: "INR",
  areaServed: "JC Nagar, Bengaluru",
  seller: {
    "@type": "Person",
    telephone: "+91-9620221991",
  },
  itemOffered: {
    "@type": "Apartment",
    name: "Residential apartment in JC Nagar",
    floorSize: {
      "@type": "QuantitativeValue",
      value: 675,
      unitCode: "FTK",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "JC Nagar",
      addressRegion: "Karnataka",
      postalCode: "560006",
      addressCountry: "IN",
    },
    image: photos.map((photo) => photo.src),
  },
};

export default function Home() {
  return (
    <div className="min-h-full bg-[linear-gradient(180deg,#fffefb_0%,#f7f2ea_40%,#f2eee8_100%)] text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 pb-28 pt-8 sm:px-8 lg:px-12">
        <section className="grid gap-8 rounded-3xl border border-amber-100 bg-white/85 p-5 shadow-[0_15px_45px_-25px_rgba(120,53,15,0.45)] backdrop-blur sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-800">
              Apartment For Sale • JC Nagar, Bengaluru
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Investor-ready apartment at Rs 42L with active monthly rental income.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg">
              Well-maintained 675 sq ft home with current rental yield of Rs 18.5k
              per month including maintenance, plus estimated 8% annual combined
              return potential from rental + appreciation.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              <div className="rounded-2xl bg-amber-50 p-3">
                <p className="text-zinc-500">Price</p>
                <p className="text-lg font-semibold text-zinc-900">Rs 42L</p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-3">
                <p className="text-zinc-500">Monthly Rent</p>
                <p className="text-lg font-semibold text-zinc-900">Rs 18.5k</p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-3">
                <p className="text-zinc-500">Area</p>
                <p className="text-lg font-semibold text-zinc-900">675 sq ft</p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-3">
                <p className="text-zinc-500">Parking</p>
                <p className="text-lg font-semibold text-zinc-900">2 scooters</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800"
              >
                Call {contactNumber}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-emerald-700 bg-emerald-50 px-6 text-base font-semibold text-emerald-800 transition hover:bg-emerald-100"
              >
                WhatsApp Owner
              </a>
            </div>
            <p className="text-sm text-zinc-600">
              Area focus: JC Nagar with quick reach to RT Nagar, MG Road, Manyata
              Tech Park, bus access, and upcoming Pink Line Cantonment metro.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
            <Image
              src="/images/tv-unit-and-hall.jpeg"
              alt="Main hall preview of the apartment"
              width={1200}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-zinc-950 sm:text-3xl">
            Key selling points
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {highlights.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm leading-6 text-zinc-800 shadow-sm"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-zinc-950 sm:text-3xl">
            Photo gallery
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <div
                key={photo.src}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1000}
                  height={1200}
                  className="h-72 w-full object-cover"
                  loading={index > 1 ? "lazy" : "eager"}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-zinc-200 bg-white/90 p-5 sm:p-8">
          <h2 className="text-2xl font-bold text-zinc-950 sm:text-3xl">
            House walkthrough video
          </h2>
          <p className="text-sm leading-6 text-zinc-700">
            Watch the walkthrough for room flow and finish details.
          </p>
          <video
            controls
            preload="metadata"
            className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-black"
            poster="/images/tv-unit-and-hall.jpeg"
            playsInline
          >
            <source src="/images/house-tour.mp4" type="video/mp4" />
            <source src="/images/house-tour.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="grid gap-6 rounded-3xl border border-amber-100 bg-amber-50/70 p-5 sm:p-8 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-zinc-950 sm:text-3xl">
              Why this is a strong buy
            </h2>
            <p className="leading-7 text-zinc-700">
              This is a practical entry ticket into a central Bengaluru catchment
              with current income in place, daily convenience, and long-term
              connectivity upside from future metro access.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-white p-5">
            <p className="text-sm text-zinc-500">Estimated combined return</p>
            <p className="text-4xl font-extrabold text-amber-800">~8%</p>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              Driven by active rent (Rs 18.5k/month, maintenance included) plus
              expected capital appreciation in the area.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-950 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-zinc-200 bg-white/95 px-4 py-3"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-zinc-900">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm leading-6 text-zinc-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-zinc-200 bg-white/95 p-3 shadow-[0_-12px_30px_-20px_rgba(0,0,0,0.55)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl gap-2">
          <a
            href={phoneHref}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-amber-700 px-3 text-sm font-semibold text-white"
          >
            Call
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-emerald-600 px-3 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
