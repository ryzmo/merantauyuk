"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ChatAIMerantauYuk() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "👋 Halo! Aku AI Merantau Yuk. Aku bisa bantu cari kos, laundry, marketplace, atau info seputar merantau. Mau tanya apa nih?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll ke bawah
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    // Dummy AI reply
    setTimeout(() => {
      let reply = "Hmm, bisa ceritakan lebih detail? 😊";
      const lower = userMessage.toLowerCase();
      if (lower.includes("kos"))
        reply = "🏠 Untuk kos, kamu bisa cek di menu 'Kos'. Mau aku bantu carikan yang terdekat?";
      else if (lower.includes("laundry"))
        reply = "🧺 Laundry terdekat bisa kamu temukan di halaman 'Laundry'. Mau lihat daftar laundry sekitar?";
      else if (lower.includes("market"))
        reply = "🛍️ Marketplace kami menyediakan kebutuhan perantau. Mau aku tampilkan beberapa produk?";
      else if (lower.includes("survei"))
        reply = "📋 Kamu bisa jadwalkan survei kos di halaman 'Survei'. Mau aku bantu arahkan ke sana?";
      else if (lower.includes("halo") || lower.includes("hai"))
        reply = "Hai juga! 😄 Mau tanya soal kos, laundry, marketplace, atau survei?";

      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setLoading(false);
    }, 700);
  };

  return (
    <>
      {/* 💬 Tombol Chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-transparent border-none outline-none hover:scale-105 transition-transform z-[45]"
        >
          <Image src="/ai.png" alt="AI Merantau Yuk" width={80} height={80} />
        </button>
      )}

      {/* 💬 Chat Window */}
      {isOpen && (
        <>
          {/* Overlay blur saat fullscreen */}
          {isFull && (
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-xl transition-all duration-300 z-[9998]"
              onClick={() => setIsFull(false)}
            />
          )}

          {/* Chat container */}
          <div
            className={`fixed ${
              isFull
                ? "inset-0 flex flex-col items-center justify-center"
                : "bottom-6 right-6"
            } z-[9999] transition-all duration-300 ease-in-out`}
          >
            <div
              className={`relative flex flex-col ${
                isFull
                  ? "w-full max-w-3xl h-[90vh] rounded-2xl"
                  : "w-80 sm:w-96 h-[28rem] rounded-2xl"
              } bg-white/95 backdrop-blur-md shadow-2xl border border-gray-200 animate-fadeIn overflow-hidden`}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between px-4 py-3 shadow-md ${
                  isFull
                    ? "bg-gradient-to-t from-[#c084fc] to-[#a78bfa]"
                    : "bg-gradient-to-t from-[#c4b5fd] to-[#ddd6fe]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/ai.png"
                    alt="AI Merantau Yuk"
                    width={45}
                    height={45}
                    className="object-contain select-none"
                  />
                  <div>
                    <h2 className="font-semibold text-sm sm:text-base text-gray-900">
                      AI Merantau Yuk
                    </h2>
                    <p className="text-xs text-gray-700">Asisten Perantau Digital</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  {/* Fullscreen Toggle */}
                  <button
                    onClick={() => setIsFull((prev) => !prev)}
                    className="text-gray-800 hover:text-gray-600 text-base font-bold"
                    title={isFull ? "Keluar layar penuh" : "Perbesar layar"}
                  >
                    {isFull ? "⤡" : "⤢"}
                  </button>

                  {/* Close */}
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsFull(false);
                    }}
                    className="text-gray-800 hover:text-gray-500 text-lg font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-br from-[#faf5ff] to-[#e0f2fe] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex mb-2 ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.role === "bot" && (
                      <Image
                        src="/ai.png"
                        alt="AI"
                        width={26}
                        height={26}
                        className="self-end mr-2 rounded-full border border-gray-300"
                      />
                    )}
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm leading-relaxed shadow-sm ${
                        m.role === "user"
                          ? "bg-[#8b5cf6] text-white rounded-br-none"
                          : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex items-center gap-1 text-gray-500 text-sm ml-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div
                className={`border-t text-black border-gray-200 bg-white/90 backdrop-blur-md p-3 flex items-center gap-2 ${
                  isFull ? "sticky bottom-0 left-0" : ""
                }`}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ketik pesan..."
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-[#8b5cf6] focus:outline-none bg-white/70"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md active:scale-95 transition disabled:opacity-60"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.35s ease forwards;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
