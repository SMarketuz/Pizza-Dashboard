import Image from "next/image";

export default function CategoryProps({img, text}){
    return (
        <div className="min-w-[160px] h-[150px] rounded-[16px] bg-[#fff] flex flex-col items-center justify-center gap-2">
            <Image src={img} alt="image" />
            <h1 className="text-[#A098AE] font-[400] text-[18px]">{text}</h1>
        </div>
    )
}