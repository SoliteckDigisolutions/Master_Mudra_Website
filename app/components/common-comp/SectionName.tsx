
interface SectionDataType {
    icon : any,
    name : string
}

export default function SectionName({name, icon}:SectionDataType) {
    const Icon = icon
    return (
        <>
         <span className="inline-flex items-center w-fit gap-2 rounded-full bg-green-100 px-2 py-2 text-sm font-semibold text-gray-900">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
         <Icon className="h-7 w-7 flex items-center text-white" />
        </span>
       {name}
      </span>
        
        </>
    )
}