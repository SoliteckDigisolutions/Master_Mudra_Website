interface HeadingType {
    name : string,
    desc? : string
}

export default function HeadngInfo({name, desc}: HeadingType) {
     return (
        <>

          <h2 className="text-3xl leading-15 font-bold text-black sm:text-4xl lg:text-5xl">
     {name}
    </h2>

    {
        desc && (
             <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
            {desc}
          </p>
        )
    }

        </>
     )
}