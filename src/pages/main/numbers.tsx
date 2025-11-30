import { motion } from "framer-motion";
import { Search, Zap } from "lucide-react";
import { useState } from "react";
import { MainLayout } from "@/layouts";

// Using emoji flags (can be replaced with local SVG icons later)
const countries = [
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
];

const services = [
  { id: 1, name: "WhatsApp", price: 19900 },
  { id: 2, name: "Telegram", price: 15000 },
  { id: 3, name: "Gmail", price: 22000 },
];

export default function NumbersPage() {
  const [selectedCountry, setSelectedCountry] = useState("NG");
  const [query, setQuery] = useState("");

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="main space-y-8 pb-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-space font-bold">Purchase Number</h1>
          <p className="text-sm text-muted">Select country and choose service</p>
        </motion.div>

        {/* Country Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto hide-scrollbar"
        >
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => setSelectedCountry(country.code)}
              className={`px-4 py-2 rounded-xl border flex items-center gap-2 transition ${
                selectedCountry === country.code
                  ? "bg-primary text-background border-primary"
                  : "bg-secondary dark:bg-foreground border-line text-main hover:border-main/50"
              }`}
            >
              <span className="text-lg">{country.flag}</span>
              <span className="text-sm">{country.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Search Services */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="relative"
        >
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-11 pl-12 rounded-xl border border-line bg-background text-sm"
          />
        </motion.div>

        {/* Services List */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-space font-semibold">
            Services ({countries.find((c) => c.code === selectedCountry)?.name})
          </h2>

          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.03 }}
                className="p-4 border border-line bg-secondary dark:bg-foreground rounded-xl flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <div className="size-8 center rounded-lg bg-primary/10 text-primary">
                    <Zap size={16} />
                  </div>
                  <p className="text-sm font-medium">{service.name}</p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-sm font-space font-semibold">
                    ₦{service.price.toLocaleString()}
                  </p>
                  <button className="btn-primary px-4 py-2 rounded-xl text-sm">
                    Purchase
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-sm text-muted py-4">
              No services found
            </p>
          )}
        </motion.div>
      </div>
    </MainLayout>
  );
}