"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, description, tags = [], github, image }) => {
  return (
    <div className="bg-[var(--color-primary)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 flex flex-col">

      {/* IMAGE */}
      {image && (
        <div className="w-full aspect-video relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[var(--color-white)]">
            {title}
          </h3>

          <p className="text-sm text-[var(--color-white)] mb-4 leading-relaxed">
            {description}
          </p>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-black)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GITHUB */}
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-background)] hover:underline"
          >
            ↗ View on GitHub
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
