import Feature from '@components/Feature';
import Footer from '@components/Footer';
import LogoImage from '@components/Logo.jsx';
import InputWidget from '@components/InputWidget';
import Calculator from '@components/Calculator';


const features = [
  {
    title: 'npm run start',
    description: 'Run the React app in development mode with live reloading maybe.',
  },

];

//<div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">

const App = () => (

  <div class='flex flex-col items-center h-screen bg-gray-300'>


    <div class='mt-10 text-blue-700 font-bold mb-5'>
      <p>K Woodall Pebble Beach </p>
    </div>

    <Calculator />

  </div>
);

export default App;

/*



       </div>
            </div>
              <div className='text-blue-200'>
                {features.map((feature) => (
                  <Feature
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              


  <div className='relative py-3 sm:mx-auto sm:max-w-xl'>
      <div className='to-light-blue-500 absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl' />
      <div className='relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20'>
        <div className='mx-auto max-w-md'>
    
        </div>
      </div>
    </div>
*/