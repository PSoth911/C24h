import {
  faMoneyBillWave,
  faReceipt,
  faStore,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CashPayment = () => {
  return (
    <div className="rounded-2xl bg-white p-2 px-6 shadow-2xl">
      <div className="flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#004953]/10">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-3xl text-[#004953]"
          />
        </div>
      </div>
      <div className="mt-5 text-center">
        <h2 className="text-2xl font-bold text-[#004953]">
          Cash Payment
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Pay directly at the cinema counter before collecting your ticket.
        </p>
      </div>
      <div className="mt-6 rounded-xl border border-[#004953]/20 bg-[#004953]/5 p-5 text-center">
        <p className="text-sm text-[#004953]">
          Please prepare the exact amount
        </p>
        <h1 className="mt-2 text-4xl font-bold text-[#004953]">
          $35.30
        </h1>
        <p className="mt-1 text-xs text-gray-500">Exact change helps speed up the process</p>
      </div>
      <div className="mt-6 rounded-xl bg-[#004953]/5 p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#004953] text-white">
              <FontAwesomeIcon icon={faReceipt} />
            </div>
            <span className="mt-2 text-xs font-medium">BOOKED</span>
          </div>
          <div className="h-0.5 flex-1 border-t-2 border-dashed border-[#004953]"></div>
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#004953] text-white">
              <FontAwesomeIcon icon={faStore} />
            </div>
            <span className="mt-2 text-xs font-medium">ARRIVE</span>
          </div>
          <div className="h-0.5 flex-1 border-t-2 border-dashed border-[#004953]"></div>
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#004953] text-white">
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </div>
            <span className="mt-2 text-xs font-medium">PAY</span>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-xl border border-[#004953]/10 bg-[#004953]/5 p-5">
        <h3 className="font-semibold text-[#004953]">
          Important Notes
        </h3>
        <ul className="mt-3 space-y-3 text-sm text-gray-600">
          <li>
            • Please arrive at least 15 minutes before showtime.
          </li>
          <li>
            • Unpaid reservations may be cancelled automatically.
          </li>
          <li>
            • A digital receipt will be issued after payment confirmation.
          </li>
        </ul>
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 text-sm text-[#004953]">
        <FontAwesomeIcon icon={faCircleCheck} />
        <span>
          Cash payment available at your selected cinema.
        </span>
      </div>
    </div>
  );
};

export default CashPayment;