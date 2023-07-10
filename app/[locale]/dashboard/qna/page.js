import QNAItems from "@/components/QNAItems";

export default function page() {
  return (
    <div className="px-10 py-6">
      <div className="mb-6">
        <h2 className="text-slate-900 font-bold text-2xl">প্রশ্ন ও উত্তর</h2>
      </div>
      <QNAItems />
    </div>
  );
}
