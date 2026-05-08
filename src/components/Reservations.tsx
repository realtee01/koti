import { useState, FormEvent } from 'react';

export default function Reservations() {
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  const handleReservationSubmit = (e: FormEvent) => {
    e.preventDefault();
    setReservationSubmitted(true);
  };

  return (
    <section id="reservations" className="py-48 px-8 text-center bg-[#181816] text-[#f7f7f5]">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="text-xs uppercase tracking-[0.15em] opacity-50">
          03. Reservations
        </div>
        <h2 className="font-serif text-5xl lg:text-7xl font-light tracking-tight">Join us at the table.</h2>
        <p className="text-base font-light text-[#f7f7f5]/60 max-w-lg mx-auto leading-relaxed">
          Reservations open on the first of each month at 10:00 AM local time for the following month. We accommodate parties of 1 to 6 guests.
        </p>
        <div className="pt-8">
          {reservationSubmitted ? (
            <div className="pt-8 space-y-6 animate-in fade-in duration-1000">
              <p className="font-serif text-3xl font-light text-[#f7f7f5]">We look forward to welcoming you.</p>
              <p className="text-[#f7f7f5]/60 text-base font-light">Your request has been received. We will be in touch shortly to confirm.</p>
              <button onClick={() => setReservationSubmitted(false)} className="mt-8 text-xs uppercase tracking-[0.1em] border-b border-[#f7f7f5]/40 pb-1 hover:border-[#f7f7f5] transition-colors">
                Make another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleReservationSubmit} className="max-w-2xl mx-auto pt-8 space-y-12 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
                <div className="flex flex-col border-b border-[#f7f7f5]/20 focus-within:border-[#f7f7f5]/60 transition-colors lg:col-span-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-[#f7f7f5]/40 mb-2">Name</label>
                  <input type="text" id="name" required className="bg-transparent border-none outline-none py-2 text-[#f7f7f5] text-sm font-light placeholder:text-[#f7f7f5]/20" placeholder="Your full name" />
                </div>
                <div className="flex flex-col border-b border-[#f7f7f5]/20 focus-within:border-[#f7f7f5]/60 transition-colors">
                  <label htmlFor="date" className="text-[10px] uppercase tracking-[0.2em] text-[#f7f7f5]/40 mb-2">Date</label>
                  <input type="date" id="date" required className="bg-transparent border-none outline-none py-2 text-[#f7f7f5] text-sm font-light [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50" />
                </div>
                <div className="flex flex-col border-b border-[#f7f7f5]/20 focus-within:border-[#f7f7f5]/60 transition-colors">
                  <label htmlFor="time" className="text-[10px] uppercase tracking-[0.2em] text-[#f7f7f5]/40 mb-2">Time</label>
                  <input type="time" id="time" required className="bg-transparent border-none outline-none py-2 text-[#f7f7f5] text-sm font-light [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50" />
                </div>
                <div className="flex flex-col border-b border-[#f7f7f5]/20 focus-within:border-[#f7f7f5]/60 transition-colors lg:col-span-2">
                  <label htmlFor="guests" className="text-[10px] uppercase tracking-[0.2em] text-[#f7f7f5]/40 mb-2">Number of Guests</label>
                  <select id="guests" defaultValue="" required className="bg-transparent border-none outline-none py-2 text-[#f7f7f5] text-sm font-light appearance-none cursor-pointer">
                    <option value="" disabled className="text-black">Select guest count</option>
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num} className="bg-[#181816] text-[#f7f7f5]">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="pt-8 text-center">
                <button type="submit" className="px-12 py-5 w-full lg:w-auto border border-[#f7f7f5]/20 text-xs uppercase tracking-[0.2em] hover:bg-[#f7f7f5] hover:text-[#181816] hover:border-[#f7f7f5] transition-all duration-500 cursor-pointer">
                  Request Table
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
