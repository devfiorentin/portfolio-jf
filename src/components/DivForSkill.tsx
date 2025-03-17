export default function DivForSkill({ titleSkill, Icon }: { titleSkill: string, Icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center text-left bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 gap-3 w-[180px] h-[200px] max-h-[300px] p-8">
      <span className="text-[20px] font-medium">{titleSkill}</span>
      <div className="text-blue-500">{Icon}</div>
    </div>
  );
}
