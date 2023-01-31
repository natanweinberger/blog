import Image from 'next/image'

const Figure = ({imageSrc, caption}) => {
  return (
    <div className="my-4">
    <Image src={imageSrc}/>
    <div className="text-gray-500 text-center">{caption}</div>
    </div>
   )
}

export default Figure