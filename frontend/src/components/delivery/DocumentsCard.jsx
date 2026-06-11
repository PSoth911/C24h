import {
  CheckCircle,
  Shield,
} from "lucide-react";

export default function DocumentsCard() {
  const docs = [
    "National ID",
    "Driving License",
    "Insurance",
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-lg mb-5">
        Documents
      </h3>

      <div className="space-y-4">
        {docs.map((doc) => (
          <div
            key={doc}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <Shield size={18} />
              {doc}
            </div>

            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle size={18} />
              Verified
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}