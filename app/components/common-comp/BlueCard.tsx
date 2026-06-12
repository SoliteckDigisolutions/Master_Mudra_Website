import { CardDataType } from "@/app/type";

interface CardDatas {
  data: CardDataType[];
}

export default function BlueCard({ data }: CardDatas) {
  return (
    <>
      {data.map((item: CardDataType, index: number) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-100 to-green-300 p-4"
          >
            {/* Background Icon */}
            <div className="absolute right-1 bottom-32 opacity-100">
              <Icon className="h-18 w-18 text-white" />
            </div>

            {/* Top Icon */}
            <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
              <Icon className="h-7 w-7 text-green-400" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="mb-1 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-slate-600">
                {item.content}
              </p>
            </div>

           
          </div>
        );
      })}
    </>
  );
}