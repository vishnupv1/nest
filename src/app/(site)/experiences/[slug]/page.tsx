import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";
import { getExperiences, getExperienceBySlug } from "@/lib/experiences";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const experiences = await getExperiences();
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exp = await getExperienceBySlug(slug);
  if (!exp) return { title: "Experience | NEST Tourism" };
  return {
    title: `${exp.title} | NEST Tourism Wayanad`,
    description: exp.description,
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const experience = await getExperienceBySlug(slug);
  if (!experience) notFound();

  return (
    <div className="pt-20">
      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
            <h1 className="mt-8 text-3xl font-bold text-[#1B5E57] sm:text-4xl">
              {experience.title}
            </h1>
            <p className="mt-4 text-[#1A1A1A]/90 leading-relaxed">
              {experience.description}
            </p>
            <div className="mt-6 flex gap-6 text-[#0F9D8F]">
              {experience.price && (
                <span className="font-semibold">{experience.price}</span>
              )}
              {experience.duration && (
                <span className="font-medium">{experience.duration}</span>
              )}
            </div>
          </div>
          <div className="lg:col-span-2">
            <BookingForm
              experienceId={experience._id}
              experienceTitle={experience.title}
            />
          </div>
        </div>
        <div className="mt-12">
          <Link
            href="/experiences"
            className="text-[#0F9D8F] font-medium hover:underline"
          >
            ← Back to all experiences
          </Link>
        </div>
      </article>
    </div>
  );
}
