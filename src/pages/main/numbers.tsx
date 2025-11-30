import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { MainLayout } from "@/layouts";
import { NonCloseModal } from "@/components/ui";

export default function Numbers() {
  // Mock data
  const countries = [
    { code: "NG", name: "Nigeria", flag: "🇳🇬" },
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
    { code: "IN", name: "India", flag: "🇮🇳" },
  ];

  const services = [
    { id: 1, name: "WhatsApp", price: 19900 },
    { id: 2, name: "Telegram", price: 15000 },
    { id: 3, name: "Gmail", price: 22000 },
  ];

  const [countryDropdown, setCountryDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState<any>(countries[0]);
  const [selectedService, setSelectedService] = useState<any>(services[0]);

  const [countryQuery, setCountryQuery] = useState("");
  const [serviceQuery, setServiceQuery] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(countryQuery.toLowerCase())
  );

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(serviceQuery.toLowerCase())
  );

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    // TODO: call API / deduct wallet etc
    console.log("Confirmed purchase:", {
      country: selectedCountry,
      service: selectedService,
    });
    setIsModalOpen(false);
  };

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
          <p className="text-sm text-muted">
            Select country & service, then confirm purchase
          </p>
        </motion.div>

        {/* Country Dropdown */}
        <div className="space-y-2 relative">
          <label className="text-sm text-muted">Country</label>
          <div
            className="border border-line bg-secondary dark:bg-foreground rounded-xl h-11 flex items-center justify-between px-4 cursor-pointer"
            onClick={() => {
              setCountryDropdown(!countryDropdown);
              setServiceDropdown(false);
            }}
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{selectedCountry.flag}</span>
              <span className="text-sm">{selectedCountry.name}</span>
            </span>
            {countryDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>

          {countryDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-[50] w-full bg-background shadow-md border border-line rounded-xl mt-1"
            >
              <div className="relative p-2">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  className="w-full border border-line bg-background rounded-lg text-sm pl-8 h-9"
                  placeholder="Search country..."
                  value={countryQuery}
                  onChange={(e) => setCountryQuery(e.target.value)}
                />
              </div>

              <div className="max-h-48 overflow-y-auto">
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      setSelectedCountry(country);
                      setCountryDropdown(false);
                      setCountryQuery("");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-secondary transition text-sm flex items-center gap-2"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span>{country.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Service Dropdown */}
        <div className="space-y-2 relative">
          <label className="text-sm text-muted">Service</label>
          <div
            className="border border-line bg-secondary dark:bg-foreground rounded-xl h-11 flex items-center justify-between px-4 cursor-pointer"
            onClick={() => {
              setServiceDropdown(!serviceDropdown);
              setCountryDropdown(false);
            }}
          >
            <span className="flex items-center gap-2">
              <Zap size={14} />
              <span className="text-sm">{selectedService.name}</span>
            </span>
            {serviceDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>

        {serviceDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute z-[50] w-full bg-background shadow-md border border-line rounded-xl mt-1"
          >
            <div className="relative p-2">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                className="w-full border border-line bg-background rounded-lg text-sm pl-8 h-9"
                placeholder="Search service..."
                value={serviceQuery}
                onChange={(e) => setServiceQuery(e.target.value)}
              />
            </div>

            <div className="max-h-48 overflow-y-auto">
              {filteredServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setSelectedService(service);
                    setServiceDropdown(false);
                    setServiceQuery("");
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-secondary transition text-sm flex items-center gap-2"
                >
                  <Zap size={14} />
                  <span>{service.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
        </div>

        {/* Purchase Button */}
        <button
          className="btn-primary w-full h-11 rounded-xl text-sm font-semibold"
          onClick={handlePurchase}
        >
          Purchase {selectedService.name} Number ({selectedCountry.name})
        </button>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <NonCloseModal
          isOpen={isModalOpen}
          title="Confirm Purchase"
        >
          <div className="space-y-4">
            <p className="text-sm text-muted">
              You are about to purchase a{" "}
              <span className="text-main font-medium">
                {selectedService.name}
              </span>{" "}
              number for{" "}
              <span className="text-main font-medium">
                {selectedCountry.name} {selectedCountry.flag}
              </span>{" "}
              at{" "}
              <span className="text-main font-medium">
                ₦{selectedService.price.toLocaleString()}
              </span>
              .
            </p>

            <div className="flex gap-3 pt-1">
              <button
                className="btn bg-secondary dark:bg-foreground border border-line w-full h-10 rounded-xl text-sm"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="btn-primary w-full h-10 rounded-xl text-sm"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </NonCloseModal>
      )}
    </MainLayout>
  );
}