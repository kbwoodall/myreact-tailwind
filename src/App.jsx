import Feature from '@components/Feature';

const features = [
  {
    title: 'npm run start',
    description: 'Run the React app in development mode with live reloading maybe.',
  },

];

const App = () => (
  <div className='flex-col justify-center bg-gray-300'>
  
    
          
            <div className='space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
              <p>K Woodall  </p>
       
              <div className='list-disc space-y-2'>
                {features.map((feature) => (
                  <Feature
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>

            </div>

          
   
  </div>
);

export default App;

/*
  <div className='relative py-3 sm:mx-auto sm:max-w-xl'>
      <div className='to-light-blue-500 absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl' />
      <div className='relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20'>
        <div className='mx-auto max-w-md'>
    
        </div>
      </div>
    </div>
*/