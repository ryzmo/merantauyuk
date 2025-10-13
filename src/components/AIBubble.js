import { useState, useEffect } from "react";

export default function AIBubble() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hai! Aku YUKA 🤖, teman cerdas kamu di MerantauYuk! Mau saya bantu cari kos atau info kota?",
    },
  ]);
  const [input, setInput] = useState("");

  // 👋 Efek sapaan muncul berulang tiap beberapa waktu
  useEffect(() => {
    const greetDuration = 10000; // popup tampil selama 6 detik
    const greetInterval = 20000; // muncul setiap 20 detik (atur sesuai kebutuhan)

    // fungsi untuk menampilkan popup
    const showGreetingPopup = () => {
      setShowGreeting(true);
      setTimeout(() => setShowGreeting(false), greetDuration);
    };

    // pertama kali muncul setelah 2.5 detik
    const firstTimer = setTimeout(showGreetingPopup, 2500);

    // muncul berulang setiap interval
    const interval = setInterval(showGreetingPopup, greetInterval);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages([
      ...messages,
      userMsg,
      { from: "ai", text: "Oke! Fitur AI masih dalam pengembangan ya 😊" },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Tombol chat mengambang */}
      <button
        onClick={() => {
          setOpen(!open);
          setShowGreeting(false); // hilangkan popup kalau user buka chat
        }}
        className="fixed bottom-6 right-6 z-50 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-r from-brand-400 to-brand-600 text-white shadow-lg hover:shadow-glow transition-all"
        aria-label="Buka chat AI YUKA"
      >
        <img
          src="/yuka.png"
          alt="YUKA AI"
          className={`h-[80px] w-[80px] object-contain transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>

      {/* 🎈 Popup sapaan otomatis berulang */}
      {showGreeting && !open && (
        <div className="fixed bottom-28 right-6 z-40 max-w-xs rounded-2xl bg-brand-900/90 text-white shadow-xl border border-white/10 backdrop-blur p-4 animate-fade-in">
          <p className="text-sm leading-relaxed">
            👋 Hai, aku <span className="font-semibold text-brand-400">YUKA</span>!  
            Teman cerdas kamu di MerantauYuk.  
            Klik aku kalau mau ngobrol ya!
          </p>
          <div className="absolute -bottom-2 right-10 w-4 h-4 rotate-45 bg-brand-900/90 border-r border-b border-white/10"></div>
        </div>
      )}

      {/* Popup chat utama */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl bg-brand-950/90 backdrop-blur-lg shadow-2xl ring-1 ring-white/10 border border-white/10 overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-brand-900/60">
            <p className="font-semibold text-white">
              YUKA — Asisten AI MerantauYuk
            </p>
          </div>

          <div className="max-h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm max-w-[75%] leading-relaxed ${
                    msg.from === "user"
                      ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow"
                      : "bg-white/10 text-white/90"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSend}
            className="flex items-center border-t border-white/10 bg-brand-900/40 p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pesan..."
              className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 outline-none focus:ring-1 focus:ring-brand-400"
            />
            <button
              type="submit"
              className="ml-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-glow transition"
            >
              Kirim
            </button>
          </form>
        </div>
      )}
    </>
  );
}
