import { useEffect, useState } from "react";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KHQRPayment = () => {
  const [timeLeft, setTimeLeft] = useState(3 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const isExpired = timeLeft === 0;
  const isWarning = timeLeft <= 120;

  return (
    <div className="rounded-2xl px-8 py-2 shadow-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#005566]">
          KHQR Payment
        </h2>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isExpired
              ? "bg-red-100 text-red-600"
              : "bg-yellow-100 text-[#004953]"
          }`}
        >
          {isExpired ? "Expired" : "Pending"}
        </span>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Amount to Pay
        </p>

        <h1 className="mt-1 text-4xl font-bold text-[#005566]">
          $25.00
        </h1>
      </div>
      <div className="mt-6 flex justify-center">
        <div className="rounded-2xl border bg-white p-4">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=KHQR-DEMO"
            alt="KHQR"
            className="h-60 w-60"
          />
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-sm text-gray-500">
          QR expires in
        </p>
        <h3
          className={`mt-1 text-2xl font-bold ${
            isWarning
              ? "text-red-500"
              : "text-[#005566]"
          }`}
        >
          {formatTime()}
        </h3>

        {isWarning && !isExpired && (
          <p className="mt-2 text-sm text-red-400">
            QR code will expire soon
          </p>
        )}
      </div>
      <div className="mt-6 rounded-xl bg-gray-50 p-4">
        <div className="flex justify-between">
          <span className="text-gray-500">
            Order ID
          </span>

          <span className="font-medium">
            ORD-2025001
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Merchant
          </span>

          <span className="font-medium">
            CineBook
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Payment Method
          </span>

          <span className="font-medium">
            KHQR
          </span>
        </div>
      </div>
      <div className="mt-2 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <h4 className="font-semibold text-blue-700">
          How to Pay
        </h4>

        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-blue-600">
          <li>Open your banking app</li>
          <li>Tap Scan QR</li>
          <li>Scan the KHQR code</li>
          <li>Confirm payment</li>
        </ol>
      </div>

      <div className="mt-2">
        {isExpired ? (
          <button
            className="
              flex w-full items-center justify-center gap-2
              rounded-xl bg-[#005566] py-3
              font-semibold text-white
              hover:bg-[#004953]
            "
          >
            <FontAwesomeIcon icon={faRotateRight} />
            Generate New QR
          </button>
        ) : (
          <button className=" w-full rounded-xl border border-[#005566] py-3 font-semibold text-[#005566] hover:bg-[#005566] hover:text-white"
          >
            Generate New QR Code
          </button>
        )}
      </div>
    </div>
  );
};

export default KHQRPayment;