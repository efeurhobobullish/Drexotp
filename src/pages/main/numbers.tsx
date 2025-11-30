import { motion } from "framer-motion";
import { Search, Globe } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts";

// Mock country list (use real API later)
const countries = [
  { code: "NG", name: "Nigeria" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "IN", name: "India" },
  { code: "CA", name: "Canada" },
];

export default function SelectCountryPage() {
  const [query, setQuery] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="main space-y-6 pb-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-space font-bold">Select Country</h1>
          <p className="text-sm text-muted">Start by choosing a country</p>
        </motion.div>

        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search country..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-11 pl-12 rounded-xl border border-line bg-background text-sm"
          />
        </motion.div>

        {/* Country List */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="space-y-2"
        >
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.03 }}
              >
                <Link
                  to={`/numbers/purchase/${country.code}`} // Next: service selection
                  className="flex items-center gap-3 p-3 border border-line rounded-xl bg-secondary dark:bg-foreground hover:border-line/80 transition"
                >
                  <div className="size-8 center rounded-lg bg-primary/10 text-primary">
                    <Globe size={16} />
                  </div>
                  <p className="text-sm font-medium">{country.name}</p>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-sm text-muted py-4">No countries found</p>
          )}
        </motion.div>
      </div>
    </MainLayout>
  );
}