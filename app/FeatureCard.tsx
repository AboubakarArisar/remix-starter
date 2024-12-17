type cardProps = {
  title: string;
  description: string;
  image: string;
};

export default function FeatureCard({ title, description, image }: cardProps) {
  return (
    <div className='p-2  border h-[50vh] md:w-1/4 border-gray-900 rounded-lg shadow-md'>
      <img
        className='w-full h-[50%] rounded-t-lg'
        src={image}
        alt='Remix image'
      />
      <div className='mt-2'>
        <h2 className='text-xl font-bold text-center mb-8 text-gray-300'>
          {title}
        </h2>
        <p className='text-center text-gray-500'>{description}</p>
      </div>
    </div>
  );
}
