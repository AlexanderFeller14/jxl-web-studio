'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { caseStudies } from '@/lib/references';
import { GlareHover } from '@/components/reactbits/glare-hover';
import { ReflectiveCard } from '@/components/reactbits/reflective-card';
import { TiltedCard } from '@/components/reactbits/tilted-card';

type Filter = 'all' | 'featured' | 'hot';
type Sort = 'impact' | 'name';

export function ReferencesGrid() {
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<Sort>('impact');

  const visible = useMemo(() => {
    const filtered = caseStudies.filter((entry) => {
      if (filter === 'featured') {
        return entry.featured;
      }
      if (filter === 'hot') {
        return entry.hot || entry.conversionTag === 'Best Conversion';
      }
      return true;
    });

    return filtered.sort((a, b) => {
      if (sort === 'name') {
        return a.title.localeCompare(b.title);
      }
      const aScore = a.metrics[0]?.value ?? 0;
      const bScore = b.metrics[0]?.value ?? 0;
      return bScore - aScore;
    });
  }, [filter, sort]);

  return (
    <div className="space-y-6">
      <div className="surface-card flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'Alle Cases' },
            { key: 'featured', label: 'Featured' },
            { key: 'hot', label: 'New / Hot' }
          ].map((entry) => (
            <GlareHover key={entry.key} className="rounded-full">
              <button
                type="button"
                onClick={() => setFilter(entry.key as Filter)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  filter === entry.key
                    ? 'border-sky-300/40 bg-sky-300/20 text-sky-100'
                    : 'border-white/20 bg-slate-900/60 text-slate-300 hover:border-sky-300/40 hover:text-white'
                }`}
              >
                {entry.label}
              </button>
            </GlareHover>
          ))}
        </div>

        <label className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-400">
          Sortieren
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as Sort)}
            className="rounded-full border border-white/20 bg-slate-900 px-3 py-2 text-xs text-slate-200"
          >
            <option value="impact">nach Impact</option>
            <option value="name">alphabetisch</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {visible.map((entry) => {
          const isFeaturedCard = filter === 'featured';
          const isReflective = !isFeaturedCard && (entry.hot || entry.conversionTag === 'Best Conversion');

          const content = (
            <>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-slate-400">
                <span>{entry.industry}</span>
                <span>·</span>
                <span>{entry.conversionTag}</span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-slate-100">{entry.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{entry.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/referenzen/${entry.slug}`} className="mt-6 inline-flex text-sm font-semibold text-sky-200 hover:text-white">
                Case öffnen
              </Link>
            </>
          );

          if (isFeaturedCard) {
            return <TiltedCard key={entry.slug}>{content}</TiltedCard>;
          }

          if (isReflective) {
            return <ReflectiveCard key={entry.slug}>{content}</ReflectiveCard>;
          }

          return (
            <article key={entry.slug} className="surface-card p-6 sm:p-7">
              {content}
            </article>
          );
        })}
      </div>
    </div>
  );
}
