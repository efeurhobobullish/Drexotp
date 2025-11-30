import { motion } from "framer-motion";
import { Search, Globe, Zap } from "lucide-react";
import { useState } from "react";
import { MainLayout } from "@/layouts";
import { Link } from "react-router-dom";

export default function Numbers() {
  // Mock data (replace with API later)
  const countries = [
    { code: "NG", name: "Nigeria" },
    { code: "US", name: "United States" },
    { code: "GB", name: "United Kingdom" },
    { code: "IN", name: "India" },
    { code: "CA", name: "Canada" },
  ];

  const services = [
    { id: 1, name: "WhatsApp", price: 19900 },
    { id: 2, name: "Telegram", price: 15000 },
    { id: 3, name: "Gmail", price: 22000 },
  ];

  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(query.toLowerCase())
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
          <h1 className="text-2xl font-space font-bold">Buy Number</h1>
          <p className="text-sm text-muted">Search country and pick a service</p>
        </motion.div>

        {/* Country Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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

        {/* Country Selection */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {filteredCountries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <button
                onClick={() => setSelectedCountry(country.code)}
                className={`flex items-center gap-3 w-full p-3 border rounded-xl transition ${
                  selectedCountry === country.code
                    ? "border-main bg-primary/10"
                    : "border-line bg-secondary dark:bg-foreground"
                }`}
              >
                <Globe size={16} className="text-primary" />
                <p className="text-sm">{country.name}</p>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Based on Country */}
        {selectedCountry && (
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h2 className="text-lg font-space font-semibold">
              Select Service — {countries.find((c) => c.code === selectedCountry)?.name}
            </h2>

            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="p-4 border border-line rounded-xl bg-background flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-primary" />
                  <p className="text-sm font-medium">{service.name}</p>
                </div>
                <Link to={`/numbers/purchase/${selectedCountry}/${service.id}`}>
                  <button className="btn-primary px-4 py-2 rounded-xl text-sm">
                    Use
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
}