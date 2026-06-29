import { MapPin, Clock, DollarSign, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const BASE = "http://localhost:5000/api";

export default function NewOrder({ order, onAccepted }) {
  const [loading, setLoading] = useState(false);
  const [declined, setDeclined] = useState(false);

  const handleAccept = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE}/driver/accept/${order.delivery_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success ?? res.ok) onAccepted?.();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (declined) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-slate-400">Order #{order.order_id ?? order.delivery_id}</p>
          <h3 className="font-semibold text-slate-800 mt-0.5">
            {order.Order?.Restaurant?.restaurant_name ?? "Restaurant"}
          </h3>
        </div>
        <span className="bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full">
          New
        </span>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm text-slate-600">
        {order.Order?.Restaurant?.address && (
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-slate-400 shrink-0" />
            <span className="truncate">{order.Order.Restaurant.address}</span>
          </div>
        )}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <DollarSign size={14} className="text-slate-400" />
            ${parseFloat(order.delivery_fee ?? 0).toFixed(2)} fee
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-slate-400" />
            {order.estimated_time ?? "~20 min"}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        <button
          onClick={() => setDeclined(true)}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-red-50 hover:border-red-200 hover:text-red-500 text-sm font-medium transition"
        >
          <XCircle size={16} /> Decline
        </button>
        <button
          onClick={handleAccept}
          disabled={loading}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 text-white text-sm font-medium shadow hover:scale-[1.02] disabled:opacity-50 transition"
        >
          <CheckCircle size={16} />
          {loading ? "Accepting…" : "Accept"}
        </button>
      </div>
    </div>
  );
}