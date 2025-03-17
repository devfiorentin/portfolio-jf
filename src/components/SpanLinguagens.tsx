

export default function SpanLinguagens({linguagem}: {linguagem: string}) {
  return (
    <span className="bg-[#4169E1] text-white px-2 md:px-3 py-1 rounded text-sm">
      {linguagem}
    </span>
  );
}