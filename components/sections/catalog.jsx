import { ProductCard } from '@/components/product-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { categories, products } from '@/lib/data';

export function CatalogSection() {
  return (
    <section id="catalog" className="container-shell space-y-10 py-16">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Marketplace discovery"
          title="Featured products with layered search and filtering experiences"
          description="The storefront is structured to support featured collections, search, category chips, local discovery, and sort-by controls for both one-time purchases and rentals."
        />
        <div className="glass-card flex flex-wrap gap-3 p-4">
          {categories.map((category) => (
            <button key={category} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-brand hover:text-brand">
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
