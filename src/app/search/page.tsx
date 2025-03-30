import { Suspense } from 'react';
export default function SearchPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const query = searchParams?.q || '';

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}

function SearchResults({ query }: { query: string }) {
  return (
    <div>
      {query ? (
        <p>Showing results for: <strong>{query}</strong></p>
      ) : (
        <p>No search query entered</p>
      )}
      <p className="mt-4">
        <a href="/" className="text-primary hover:underline">
          Return to homepage
        </a>
      </p>
    </div>
  );
}
